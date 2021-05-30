module.exports = {
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    semi: ['error', 'never'],
    'react/jsx-one-expression-per-line': ['off'],
    'react/jsx-filename-extension': ['error', { "extensions": [".js", ".ts", ".jsx", ".tsx"] }],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/extensions": ['off'],
    'max-len': ["error", { "code": 200 }],
    "react/forbid-prop-types": ["error", {"forbid": ['any']}]
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      },
      'typescript': {},
    }
  }
};
