import { defineConfig } from "vitest/config";
import path from "node:path";
import { config } from "dotenv";

// Load test environment variables from .env.test
config({ path: path.resolve(__dirname, ".env.test") });

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    env: {
      USERNAME: process.env.USERNAME || "",
      TEMPLATE_REPO_APP: process.env.TEMPLATE_REPO_APP || "",
      TEMPLATE_REPO_PAGES: process.env.TEMPLATE_REPO_PAGES || "",
    },
    coverage: {
      provider: "istanbul",
      reporter: ["text", "json", "html", "lcov"],
      exclude: [
        "node_modules/**",
        "dist/**",
        "**/*.d.ts",
        "**/*.config.*",
        "**/tests/**",
        "**/__tests__/**",
        "src/index.ts", // CLI entry point - tested via E2E
        "src/features/ui/shadcn/defaults.ts",
      ],
      include: ["src/**/*.ts"],
    },
    include: ["tests/**/*.test.ts", "src/**/*.test.ts"],
    exclude: ["node_modules/**", "dist/**"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
