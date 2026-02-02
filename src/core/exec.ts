import { execa } from "execa";

export async function run(cmd: string, args: string[], cwd?: string) {
  await execa(cmd, args, { cwd, stdio: "pipe" });
}

export async function runWithOutput(cmd: string, args: string[], cwd?: string) {
  const result = await execa(cmd, args, { cwd });
  return result.stdout;
}

export async function cmdExists(cmd: string): Promise<boolean> {
  try {
    await execa("which", [cmd], { stdio: "pipe" });
    return true;
  } catch {
    return false;
  }
}
