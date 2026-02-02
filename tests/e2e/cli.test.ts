import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { execa } from "execa";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";

describe("CLI E2E", () => {
  let tempDir: string;
  const cliPath = path.resolve(__dirname, "../../dist/index.js");

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "test-cli-"));
  });

  afterEach(() => {
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  });

  it("should show help message", async () => {
    const { stdout } = await execa("node", [cliPath, "--help"]);

    expect(stdout).toContain("Scaffold Next.js projects");
    expect(stdout).toContain("--router");
    expect(stdout).toContain("--github");
    expect(stdout).toContain("--install");
  });

  it("should show version", async () => {
    const { stdout } = await execa("node", [cliPath, "--version"]);
    expect(stdout).toMatch(/\d+\.\d+\.\d+/);
  });

  it("should fail with invalid router type", async () => {
    await expect(
      execa("node", [cliPath, "test-project", "--router", "invalid", "-y"], {
        cwd: tempDir,
        reject: true,
      }),
    ).rejects.toThrow();
  });
});
