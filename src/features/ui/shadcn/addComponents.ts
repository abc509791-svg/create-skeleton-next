import { run } from "../../../core/exec";
import type { Context } from "../../../core/context";
import path from "node:path";
import fs from "node:fs";

export async function shadcnAddComponents(ctx: Context) {
  if (!ctx.shadcn.components.length) return;

  try {
    // Create src/lib/utils.ts before running shadcn add
    const libDir = path.join(ctx.targetDir, "src", "lib");
    const utilsPath = path.join(libDir, "utils.ts");

    // Ensure the lib directory exists
    fs.mkdirSync(libDir, { recursive: true });

    // Write utils.ts content
    const utilsContent = `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`;

    fs.writeFileSync(utilsPath, utilsContent, "utf-8");
  } catch (error) {
    console.error(
      "Failed to create lib/utils.ts, continuing with shadcn add",
      error,
    );
  }

  // Run shadcn add command
  await run(
    "pnpm",
    ["dlx", "shadcn@latest", "add", "-y", ...ctx.shadcn.components],
    ctx.targetDir,
  );
}
