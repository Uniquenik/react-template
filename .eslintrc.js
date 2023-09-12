module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['unused-imports'],
  extends: [
    // By extending from a plugin config, we can get recommended rules without having to add them manually.
    'plugin:react/recommended',
    'mantine',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    // Make sure it's always the last config, so it gets the chance to override other configs.
    'eslint-config-prettier',
  ],
  env: {
    node: true,
  },
  rules: {
    'react-hooks/exhaustive-deps': 'off',
  },
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        curly: 2,
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }], // class methods new line
        'padding-line-between-statements': [
          1,
          { blankLine: 'always', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var', 'return'] }, // vars new line
          { blankLine: 'always', prev: '*', next: ['block-like', 'try'] }, // before try, throw, if, for etc... new line
          { blankLine: 'always', prev: ['block-like', 'try'], next: ['return'] }, // before return after try, throw, if, for etc... new line
        ],
        'default-param-last': 2,
        'max-classes-per-file': 2,
        'no-else-return': 2,
        'no-nested-ternary': 2,
        'no-unneeded-ternary': 2,
        'no-var': 2,
        'no-unused-vars': 0,
        '@typescript-eslint/no-non-null-assertion': 0, //foo.property!.includes('baz');
        'no-useless-escape': 0, //let baz = /\:/
        '@typescript-eslint/no-explicit-any': 0, //a:any
        '@typescript-eslint/no-inferrable-types': 0, //a: boolean = false
        '@typescript-eslint/no-non-null-asserted-optional-chain': 0, //foo?.bar!
        '@typescript-eslint/ban-ts-comment': 0, //@ts - ignore
        '@typescript-eslint/ban-types': 0, //lowerObj: Object = {};
        '@typescript-eslint/no-var-requires': 0, //requires(../../images)
        'no-extra-boolean-cast': 0, //!!Component
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/no-empty-interface': 0,
        'no-console': 1,
        'unused-imports/no-unused-imports': 1,
        'prefer-const': 0,
        '@typescript-eslint/no-empty-function': 0,
        'react/react-in-jsx-scope': 0, //не нужно в react 18
        'react/prop-types': 0,
        'react/display-name': 0,
        'react/jsx-key': 1, // предупреждение если нет key
      },
    },
  ],
};
