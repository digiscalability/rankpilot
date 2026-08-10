import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: __dirname,
  timeout: 60000,
  workers: 1,
  reporter: [["list"]],
  use: {
    baseURL: process.env.TEST_BASE_URL || "http://localhost:3000",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "off",
    actionTimeout: 10000,
    navigationTimeout: 20000,
    extraHTTPHeaders: {
      "x-probe-token":
        process.env.CRAWL_PROBE_TOKEN || (process.env.CRAWL_PROBE_TOKEN ?? ""),
    },
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  // No webServer and no global setup to avoid homepage warmup
});
