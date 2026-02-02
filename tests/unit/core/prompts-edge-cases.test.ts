import { describe, it, expect, vi, beforeEach } from "vitest";
import { promptForMissingOptions } from "../../../src/core/prompts";
import prompts from "prompts";

vi.mock("prompts");
vi.mock("../../../src/core/exec", () => ({
  cmdExists: vi.fn(),
}));

describe("prompts edge cases", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should handle gh CLI not available", async () => {
    const { cmdExists } = await import("../../../src/core/exec");
    vi.mocked(cmdExists).mockResolvedValue(false);

    vi.mocked(prompts).mockResolvedValue({
      router: "app",
      github: true,
      visibility: "private",
      install: true,
    });

    const result = await promptForMissingOptions(
      "test-project",
      undefined,
      undefined,
      undefined,
      undefined,
      false,
    );

    expect(result.router).toBe("app");
    expect(result.github).toBe(true);
  });

  it("should not prompt for visibility when github disabled", async () => {
    vi.mocked(prompts).mockResolvedValue({
      router: "app",
      github: false,
      install: true,
    });

    const result = await promptForMissingOptions(
      "test-project",
      undefined,
      undefined,
      undefined,
      undefined,
      false,
    );

    expect(result.github).toBe(false);
  });
});
