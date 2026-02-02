import { run } from "../../core/exec";
import type { Context } from "../../core/context";

export async function pnpmInstall(ctx: Context) {
  await run("pnpm", ["install"], ctx.targetDir);
}
