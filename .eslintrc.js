module.exports = {
  env: {
    browser: true,

    es2021: true,

    jest: true,

    node: true,
  },

  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],

  parserOptions: {
    createDefaultProgram: true,

    ecmaFeatures: {
      jsx: true,
    },

    ecmaVersion: 'latest',

    sourceType: 'module',

    tsconfigRootDir: '.',
  },

  plugins: [
    'react-hooks',
    'react',
    'eslint-plugin-import',
    'import',
    'sort-keys-fix',
    'unused-imports',
  ],

  rules: {
    'import/no-duplicates': 'warn',
    'import/order': [
      'error',

      {
        groups: [['builtin', 'external', 'internal']],
        pathGroups: [{ group: 'external', pattern: 'react', position: 'before' }],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'linebreak-style': ['error', 'unix'],

    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],

    'prettier/prettier': 'off',

    quotes: ['warn', 'single', { allowTemplateLiterals: true, avoidEscape: true }],

    'react-hooks/exhaustive-deps': 'warn',

    'react-hooks/rules-of-hooks': 'warn',

    'react/jsx-curly-brace-presence': 'warn',

    'react/jsx-uses-react': 2,

    'react/no-array-index-key': 'warn',

    'react/no-unknown-property': ['error', { ignore: ['css'] }],

    'react/prefer-stateless-function': ['error', { ignorePureComponents: false }],

    'react/prop-types': 0,

    'react/react-in-jsx-scope': 'off',

    semi: ['error', 'never'],

    'sort-keys': ['warn', 'asc', { caseSensitive: true, minKeys: 2, natural: false }],

    'sort-keys-fix/sort-keys-fix': 'warn',

    'spaced-comment': 'warn',

    'unused-imports/no-unused-imports': ['warn', { varsIgnorePattern: 'React' }],

    'unused-imports/no-unused-vars': ['warn', { args: 'after-used', varsIgnorePattern: 'React' }],
  },

  settings: {
    react: {
      version: '16.13.1',
    },
  },
}
