import { describe, it, expect, vi } from "vitest";
import { pnpmInstall } from "../../../src/features/deps/pnpmInstall";
import type { Context } from "../../../src/core/context";

vi.mock("../../../src/core/exec", () => ({
  run: vi.fn(),
}));

describe("pnpmInstall", () => {
  it("should run pnpm install in target directory", async () => {
    const { run } = await import("../../../src/core/exec");
    vi.mocked(run).mockResolvedValue();

    const ctx: Context = {
      projectName: "test-project",
      targetDir: "/tmp/test-project",
      router: "app",
      yes: false,
      install: true,
      github: {
        enabled: false,
        visibility: "private",
      },
      shadcn: {
        enabled: true,
        components: [],
      },
    };

    await pnpmInstall(ctx);

    expect(run).toHaveBeenCalledWith("pnpm", ["install"], "/tmp/test-project");
  });
});
