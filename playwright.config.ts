import { defineConfig } from "@playwright/test";
import * as dotenv from "dotenv";
import * as path from "path";

const ENV = process.env.ENV || "dev";

dotenv.config({ path: path.resolve(__dirname, `configs/.env.${ENV}`) });

console.log(`ENV=${ENV} | BASE_URL=${process.env.API_BASE_URL}`);

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: process.env.API_BASE_URL,
    trace: "on",
  },

  reporter: [["html", { open: "never" }]],
});
