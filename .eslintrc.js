module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    arguments: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    semi: 1,
    quotes: [2, 'single'],
    "linebreak-style": 0,
    'react/jsx-uses-react': 2,
    'comma-dangle': 0,
    'react/jsx-uses-vars': 1,
    'react/display-name': 1,
    'no-unused-vars': 'warn',
    'no-console': 1,
    'no-unexpected-multiline': 'warn',
    'prettier/prettier': ['error'],
    "react/jsx-uses-vars":2,
    "react/prefer-stateless-function":0
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.9.0',
    },
  },
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
};

