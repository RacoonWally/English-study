import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
        ...reactHooks.configs.recommended.rules,
        'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
        ],
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                allowExpressions: false,
                allowTypedFunctionExpressions: true,
                allowHigherOrderFunctions: true,
                allowDirectConstAssertionInArrowFunctions: true,
                allowConciseArrowFunctionExpressionsStartingWithVoid: true,
                allowFunctionsWithoutTypeParameters: true,
                allowedNames: [],
                allowIIFEs: true,
            },
        ],
        '@typescript-eslint/no-use-before-define': [
            'error',
            {
                functions: false,
                classes: false,
                variables: true,
                allowNamedExports: false,
            },
        ],
    },
  },
)
