# React + Vite + TypeScript + TailwindCSS + Shadcn + React Query + Zustand Boilerplate

This boilerplate provides a streamlined setup for developing modern web applications using React, Vite, TypeScript, TailwindCSS, Shadcn, React Query, and Zustand. It includes configurations for linting, formatting, and Storybook integration to ensure a smooth development experience.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Development](#development)
- [Building](#building)
- [Linting and Formatting](#linting-and-formatting)
- [Storybook](#storybook)
- [Expanding ESLint Configuration](#expanding-eslint-configuration)
- [Project Structure](#project-structure)
- [License](#license)

## Features

- **React 18** with **TypeScript**
- **Vite** for fast builds and HMR
- **TailwindCSS** for utility-first CSS
- **Shadcn** for design system
- **React Query** for data fetching and caching
- **Zustand** for state management
- **Storybook** for UI component development
- **ESLint** and **Prettier** for code quality and formatting

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-repo/react-vite-tailwind-boilerplate.git
   cd react-vite-tailwind-boilerplate
   ```

2. Install the dependencies:

   ```sh
   pnpm install
   # or
   yarn install
   ```

## Development

To start the development server with Vite:

```sh
pnpm run dev
# or
yarn dev
```

This will launch the application at `http://localhost:3000` with hot module replacement (HMR).

## Building

To build the project for production:

```sh
pnpm run build
# or
yarn build
```

The output will be in the `dist` directory.

## Linting and Formatting

To lint the project files:

```sh
pnpm run lint
# or
yarn lint
```

To format the project files using Prettier:

```sh
pnpm run prettier
# or
yarn prettier
```

## Storybook

To start Storybook for developing UI components:

```sh
pnpm run storybook
# or
yarn storybook
```

To build the Storybook static site:

```sh
pnpm run build-storybook
# or
yarn build-storybook
```

## Expanding ESLint Configuration

If you are developing a production application, it is recommended to enhance the ESLint configuration to enable type-aware linting rules:

1. Update the `parserOptions` in your ESLint configuration:

   ```js
   export default {
     parserOptions: {
       ecmaVersion: 'latest',
       sourceType: 'module',
       project: ['./tsconfig.json', './tsconfig.node.json'],
       tsconfigRootDir: __dirname,
     },
     // other rules...
   }
   ```

2. Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.

3. Optionally add `plugin:@typescript-eslint/stylistic-type-checked`.

4. Install `eslint-plugin-react` and add `plugin:react/recommended` and `plugin:react/jsx-runtime` to the `extends` list:

   ```sh
   pnpm install eslint-plugin-react --save-dev
   # or
   yarn add eslint-plugin-react --dev
   ```

   Update your ESLint configuration:

   ```json
   {
     "extends": [
       "plugin:react/recommended",
       "plugin:react/jsx-runtime"
       // other extends...
     ]
   }
   ```

## Project Structure

The project's structure is organized as follows:

```md
├── public # Static assets
├── src
| ├── app # Routes, etc
│ ├── assets # Images, fonts, etc.
│ ├── components # React components, (e.g., shared ui)
│ ├── hooks # Custom hooks
│ ├── features # feature components, hooks, store...
│ ├── lib # Auth, utility files for tailwind...
│ ├── store # Shared zustand stores
│ ├── styles # Global styles (e.g., Tailwind CSS)
│ ├── utils # Utility functions
│ ├── index.tsx # Entry point
│ └── ... # Other directories and files
├── .eslintrc.cjs # ESLint configuration
├── .prettierrc # Prettier configuration
├── postcss.config.cjs # PostCSS configuration
├── tailwind.config.cjs # Tailwind CSS configuration
├── tsconfig.json # TypeScript configuration
├── tsconfig.node.json # TypeScript configuration for Node
├── vite.config.ts # Vite configuration
└── package.json # Project metadata and scripts
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

This boilerplate is designed to help you get started quickly with a modern web development stack, providing all the essential tools and configurations to build high-quality React applications. Happy coding!
