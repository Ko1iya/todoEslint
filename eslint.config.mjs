import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import airbnb from 'eslint-config-airbnb';
import airbnbTypescript from 'eslint-config-airbnb-typescript'; // Как добавить во flat конфиг правильно?
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  {
    languageOptions: {
      globals: globals.browser,

      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
  pluginJs.configs.recommended,

  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...compat.extends('airbnb'),
  {
    // plugins: {
    //   '@typescript-eslint': tseslint,
    // },
    rules: {
      ...airbnbTypescript.rules,
    },
    settings: {
      ...airbnbTypescript.settings,
    },
  },

  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { rules: { 'react/react-in-jsx-scope': 'off' } },
  {
    rules: {
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
    },
  },
  {
    ignores: [
      'eslint.config.mjs',
      '**/*.d.ts',
      '**/config/**',
      'webpack.config.ts',
    ],
  },
  {
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
  },
];
