/** @format */

const esModules = ["quasar/lang", "lodash-es"].join("|")

module.exports = {
  globals: {
    __DEV__: true
  },
  setupFilesAfterEnv: ["<rootDir>/test/jest/jest.setup.js"],
  setupFiles: [], //add global
  // noStackTrace: true,
  // bail: true,
  // cache: false,
  // verbose: true,
  // watch: true,
  collectCoverage: false,
  coverageDirectory: "<rootDir>/test/jest/coverage",
  collectCoverageFrom: ["<rootDir>/src/**/*.vue", "<rootDir>/src/**/*.js", "<rootDir>/src/**/*.jsx"],
  // Needed in JS codebases too because of feature flags
  coveragePathIgnorePatterns: ["/node_modules/", ".d.ts$"],
  coverageThreshold: {
    global: {
      //  branches: 50,
      //  functions: 50,
      //  lines: 50,
      //  statements: 50
    }
  },
  testMatch: ["<rootDir>/test/jest/__tests__/**/*.(spec|test).js", "<rootDir>/src/**/*.jest.(spec|test).js"],
  moduleDirectories: ["node_modules", "bower_components", "shared"],
  moduleFileExtensions: ["vue", "js", "jsx", "json"],
  moduleNameMapper: {
    "@app": "<rootDir>/src/App.vue", //寫死
    "@test": "<rootDir>/src/components/test.vue", //寫死
    "@src": "<rootDir>/src/$1", //路徑
    "components(.*)$": "<rootDir>/src/components/$1", //EX:components/test.vue
    "@components(.*)$": "<rootDir>/src/components/$1", // no EX:@components/test.vue
    "@modules(.*)$": "<rootDir>/src/components/modules/$1", // no EX:@modules/about/index.vue
    "@controls(.*)$": "<rootDir>/src/components/controls/$1", // no EX:@modules/about/index.vue
    "@statics(.*)$": "<rootDir>/src/statics/$1", // no EX:@modules/about/index.vue
    "@layouts(.*)$": "<rootDir>/src/layouts/$1", // no EX:@modules/about/index.vue
    "@pages(.*)$": "<rootDir>/src/pages/$1", // no EX:@modules/about/index.vue
    "@mixins(.*)$": "<rootDir>/src/mixins/$1", // no EX:@modules/about/index.vue
    "@utils(.*)$": "<rootDir>/src/utils/$1", // no EX:@modules/about/index.vue
    "@store(.*)$": "<rootDir>/src/store/$1", // no EX:@modules/about/index.vue
    "@boot(.*)$": "<rootDir>/src/boot/$1", // no EX:@modules/about/index.vue
    "@i18n(.*)$": "<rootDir>/src/i18n/$1", // no EX:@modules/about/index.vue
    "@router(.*)$": "<rootDir>/src/router/$1", // no EX:@modules/about/index.vue
    quasar: "quasar/dist/quasar.umd.min.js",

    // "modules(.*)$": "<rootDir>/src/components/modules/"
    "^vue$": "vue/dist/vue.common.js"
  },
  transform: {
    ".*\\.vue$": "vue-jest",
    ".*\\.js$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
    // use these if NPM is being flaky
    // '.*\\.vue$': '<rootDir>/node_modules/@quasar/quasar-app-extension-testing-unit-jest/node_modules/vue-jest',
    // '.*\\.js$': '<rootDir>/node_modules/@quasar/quasar-app-extension-testing-unit-jest/node_modules/babel-jest'
  },
  transformIgnorePatterns: [`<rootDir>/node_modules/(?!(${esModules}))`],
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  testEnvironment: "jsdom"
}
