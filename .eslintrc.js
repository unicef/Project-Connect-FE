/** @type import('@typescript-eslint/types').ParserOptions */
const parserOptions = {
  ecmaVersion: 2020,
  sourceType: 'module',
  project: './tsconfig.json',
  tsconfigRootDir: './',
  extraFileExtensions: ['.mdx'],
};

/** @type import('eslint').Linter.Config */
const config = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions,
  env: {
    es2020: true,
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        paths: ['src'],
      },
    },
  },
  extends: [
    'plugin:unicorn/recommended',
    'plugin:jest/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/recommended',
    'xo-space',
    'xo-react/space',
    'xo-typescript/space',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'prettier/unicorn',
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['simple-import-sort'],
      rules: {
        'sort-imports': 'off',
        'import/order': 'off',
        'simple-import-sort/sort': [
          'error',
          {
            groups: [
              // Side effect imports.
              ['^\\u0000'],
              // Packages
              ['^@?\\w'],
              // Absolute imports
              ['^[^.]'],
              // Features
              ['^@/\\w'],
              // Relative imports
              ['^\\.'],
            ],
          },
        ],
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
      },
    },
    {
      files: ['src/**/*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
    {
      files: ['.storybook/**/*.ts', 'webpack/**/*.ts', '**/*.d.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['src/**/*.stories.ts', 'src/**/*.stories.tsx'],
      rules: {
        'import/no-default-export': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        'react/jsx-props-no-spreading': 'off',
      },
    },
    {
      files: ['src/**/*.mdx'],
      extends: ['plugin:mdx/recommended'],
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'off',
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/await-thenable': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-tslint-comment': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/brace-style': 'off',
        '@typescript-eslint/class-literal-property-style': 'off',
        '@typescript-eslint/comma-spacing': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/default-param-last': 'off',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/func-call-spacing': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/init-declarations': 'off',
        '@typescript-eslint/keyword-spacing': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/method-signature-style': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-array-constructor': 'off',
        '@typescript-eslint/no-base-to-string': 'off',
        '@typescript-eslint/no-confusing-non-null-assertion': 'off',
        '@typescript-eslint/no-dupe-class-members': 'off',
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-extra-non-null-assertion': 'off',
        '@typescript-eslint/no-extra-parens': 'off',
        '@typescript-eslint/no-extra-semi': 'off',
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-for-in-array': 'off',
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-void-type': 'off',
        '@typescript-eslint/no-loss-of-precision': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/no-misused-new': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/no-type-alias': 'off',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
        '@typescript-eslint/no-unnecessary-condition': 'off',
        '@typescript-eslint/no-unnecessary-qualifier': 'off',
        '@typescript-eslint/no-unnecessary-type-arguments': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars-experimental': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-useless-constructor': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/prefer-as-const': 'off',
        '@typescript-eslint/prefer-enum-initializers': 'off',
        '@typescript-eslint/prefer-for-of': 'off',
        '@typescript-eslint/prefer-function-type': 'off',
        '@typescript-eslint/prefer-includes': 'off',
        '@typescript-eslint/prefer-literal-enum-member': 'off',
        '@typescript-eslint/prefer-namespace-keyword': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/prefer-optional-chain': 'off',
        '@typescript-eslint/prefer-readonly': 'off',
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        '@typescript-eslint/prefer-reduce-type-parameter': 'off',
        '@typescript-eslint/prefer-regexp-exec': 'off',
        '@typescript-eslint/prefer-string-starts-ends-with': 'off',
        '@typescript-eslint/prefer-ts-expect-off': 'off',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/quotes': 'off',
        '@typescript-eslint/require-array-sort-compare': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/return-await': 'off',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/switch-exhaustiveness-check': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
        '@typescript-eslint/type-annotation-spacing': 'off',
        '@typescript-eslint/typedef': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/unified-signatures': 'off',
        // Custom rules
        'react/jsx-filename-extension': ['error', { extensions: ['.mdx'] }],
        'react/no-unknown-property': ['error', { ignore: ['class'] }],
        'react/jsx-no-target-blank': 'off',
      },
    },
  ],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          './*.js',
          'webpack/**/*.ts',
          'src/**/*.test.js',
          'src/**/*.test.ts',
          'src/**/*.stories.ts',
          'src/**/*.stories.tsx',
          'src/**/*.stories.mdx',
          'src/lib/storybook-kit/**/*.ts',
          '.storybook/*.ts',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
      'SequenceExpression',
    ],
    'no-restricted-imports': [
      'error',
      { patterns: ['src/', '~/@/*', '../*', '**/effects/', '**/ui/'] },
    ],
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        whitelist: {
          args: true,
          ref: true,
          Ref: true,
          props: true,
          Props: true,
          dev: true,
          Dev: true,
          prod: true,
          Prod: true,
          env: true,
          Env: true,
          params: true,
          Params: true,
          param: true,
          Param: true,
          config: true,
          Config: true,
        },
      },
    ],
    'unicorn/no-null': 'off',
    'unicorn/no-fn-reference-in-iterator': 'off',
    'react/require-default-props': [
      'warn',
      {
        forbidDefaultForRequired: true,
        ignoreFunctionalComponents: true,
      },
    ],
    '@typescript-eslint/comma-dangle': 'off',
    'capitalized-comments': [
      'error',
      'always',
      {
        ignorePattern: 'prettier|noinspection',
        ignoreInlineComments: true,
      },
    ],
  },
};

module.exports = config;
