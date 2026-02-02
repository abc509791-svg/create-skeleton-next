import prompts from "prompts";
import type { Router } from "./context";
import { DEFAULTS } from "../config/defaults";
import { cmdExists } from "./exec";

type PromptAnswers = {
  projectName?: string;
  router?: Router;
  github?: boolean;
  visibility?: "public" | "private";
  install?: boolean;
};

export async function promptForMissingOptions(
  initialProjectName?: string,
  initialRouter?: Router,
  githubFlag?: boolean,
  visibilityFlag?: "public" | "private",
  installFlag?: boolean,
  yesFlag?: boolean,
): Promise<Required<PromptAnswers>> {
  // If --yes flag is used, return all defaults immediately
  if (yesFlag) {
    return {
      projectName: initialProjectName ?? DEFAULTS.projectName,
      router: initialRouter ?? DEFAULTS.router,
      github: githubFlag ?? DEFAULTS.github.enabled,
      visibility: visibilityFlag ?? DEFAULTS.github.visibility,
      install: installFlag ?? DEFAULTS.install,
    };
  }

  const ghAvailable = await cmdExists("gh");

  const questions: prompts.PromptObject[] = [];

  // Project name
  if (!initialProjectName) {
    questions.push({
      type: "text",
      name: "projectName",
      message: "Project name:",
      initial: DEFAULTS.projectName,
    });
  }

  // Router
  if (!initialRouter) {
    questions.push({
      type: "select",
      name: "router",
      message: "Which router do you want to use?",
      choices: [
        { title: "App Router (recommended)", value: "app" },
        { title: "Pages Router", value: "pages" },
      ],
      initial: 0,
    });
  }

  // GitHub creation
  if (githubFlag === undefined) {
    questions.push({
      type: "confirm",
      name: "github",
      message: ghAvailable
        ? "Create GitHub repository with gh CLI?"
        : "Create GitHub repository? (gh CLI not found, will use git clone)",
      initial: DEFAULTS.github.enabled,
    });
  }

  // GitHub visibility (only if github is enabled)
  if (visibilityFlag === undefined) {
    questions.push({
      type: (_prev, values) => {
        const shouldAsk = values.github ?? githubFlag ?? false;
        return shouldAsk ? "select" : null;
      },
      name: "visibility",
      message: "Repository visibility:",
      choices: [
        { title: "Private", value: "private" },
        { title: "Public", value: "public" },
      ],
      initial: 0,
    });
  }

  // Install dependencies
  if (installFlag === undefined) {
    questions.push({
      type: "confirm",
      name: "install",
      message: "Install dependencies with pnpm?",
      initial: DEFAULTS.install,
    });
  }

  const answers = await prompts(questions, {
    onCancel: () => {
      console.log("\n❌ Operation cancelled by user\n");
      process.exit(0);
    },
  });

  return {
    projectName:
      initialProjectName ?? answers.projectName ?? DEFAULTS.projectName,
    router: initialRouter ?? answers.router ?? DEFAULTS.router,
    github: githubFlag ?? answers.github ?? DEFAULTS.github.enabled,
    visibility:
      visibilityFlag ?? answers.visibility ?? DEFAULTS.github.visibility,
    install: installFlag ?? answers.install ?? DEFAULTS.install,
  };
}
