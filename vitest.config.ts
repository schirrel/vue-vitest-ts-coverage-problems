import { fileURLToPath, URL } from "node:url";

import { createVuePlugin as vue } from "vite-plugin-vue2";
import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@marketplace/shared": fileURLToPath(
        new URL("../../libs/shared", import.meta.url)
      ),
      "@marketplace/utils": fileURLToPath(
        new URL("../../libs/shared/utils/src/index.ts", import.meta.url)
      ),
      "@marketplace/orders": fileURLToPath(
        new URL(
          "../../libs/web-customer/feature/orders/index.ts",
          import.meta.url
        )
      ),
    },
  },
  test: {
    passWithNoTests: true,
    exclude: [
      ...configDefaults.exclude,
      "packages/template/*",
      "*.{config,options}.*",
    ],
    alias: [{ find: /^vue$/, replacement: "vue/dist/vue.runtime.common.js" }],
    environment: "jsdom",
    globals: true,
    coverage: {
      provider: "c8",
      reporter: ["json", "lcov", "text", "text-summary", "html"],
      include: ["**/*.{js,ts,vue}"],
      exclude: [
        "*.{config,options}.*",
        "coverage/**",
        "dist/**",
        "public/**",
      ],
      reportsDirectory: "coverage",
    },
    deps: {
      external: ["**/node_modules/**", "**/dist/**"],
    },
    include: ["**/*.spec.{js,ts,vue}"],
  },
});
