/** @format */

module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  },

  env: {
    browser: true
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    // Base ESLint recommended rules
    // 'eslint:recommended',

    // Uncomment any of the lines below to choose desired strictness,
    // but leave only one uncommented!
    // See https://eslint.vuejs.org/rules/#available-rules
    "plugin:vue/recommended", // Priority A: Essential (Error Prevention)
    // 'plugin:vue/strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
    // 'plugin:vue/recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

    // https://github.com/prettier/eslint-config-prettier#installation
    // usage with Prettier, provided by 'eslint-config-prettier'.
    "prettier",

    "prettier/vue"
  ],

  plugins: [
    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
    // required to lint *.vue files
    "vue"

    // https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-509292674
    // Prettier has not been included as plugin to avoid performance impact
    // add it as an extension for your IDE
  ],

  globals: {
    ga: true, // Google Analytics
    cordova: true,
    __statics: true,
    process: true,
    Capacitor: true,
    chrome: true
  },

  // add your custom rules here
  rules: {
    "prefer-promise-reject-errors": "off",
    // allow debugger during development only
    "no-debugger": "off",
    "no-console": "off",
    "no-debugger": "off",
    "no-case-declarations": 0,
    "no-unexpected-multiline": 0,
    "no-useless-escape": 0,
    "generator-star-spacing": 0,
    "no-useless-return": 0,
    "no-multiple-empty-lines": [
      2,
      {
        max: 3
      }
    ],
    "vue/no-duplicate-attributes": 0,
    "vue/no-parsing-error": 0,
    "vue/no-unused-components": 0,
    "vue/no-v-html": 0,
    "vue/html-closing-bracket-newline": 0,
    "vue/html-indent": 0,
    "vue/attribute-hyphenation": 0,
    "vue/html-self-closing": 0,
    "vue/max-attributes-per-line": 0,
    "vue/order-in-components": [
      "error",
      {
        order: [
          "el",
          "name",
          "parent",
          "functional",
          ["delimiters", "comments"],
          ["components", "directives", "filters"],
          "extends",
          "mixins",
          "inheritAttrs",
          "model",
          ["props", "propsData"],
          "fetch",
          "asyncData",
          "computed",
          "data",
          "watch",
          "LIFECYCLE_HOOKS",
          "methods",
          "head",
          ["template", "render"],
          "renderError"
        ]
      }
    ],
    "vue/component-tags-order": 0,
    "vue/attributes-order": [
      "error",
      {
        order: ["DEFINITION", "CONDITIONALS", "LIST_RENDERING", "UNIQUE", "RENDER_MODIFIERS", "OTHER_DIRECTIVES", "CONTENT", "TWO_WAY_BINDING", "OTHER_ATTR", "GLOBAL", "EVENTS"]
      }
    ]
  }
}
