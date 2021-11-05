/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    env: {
        browser: true,
    },
    extends: ['next/core-web-vitals', 'google', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['@typescript-eslint'],
};
