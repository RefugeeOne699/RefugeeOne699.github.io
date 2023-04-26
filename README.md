# Refugee One Portfolio Page

SI 699 (2023 Winter)

## Techs

- Vite
- React.js (Javascript)

## Relevant Docs

- For UI development, please see [daisyUI](https://daisyui.com/components/) and [tailwind](https://tailwindcss.com/docs/installation)
  - For components please refer to daisyUI
  - For simple preset css classes please refer to tailwind (e.g. display, border, color, font)
- [React router](https://reactrouter.com/en/main/start/tutorial)

## Getting Started

It is recommended to load the project using VSCode as there's settings for recommended plugins and editor. Saving the code shall trigger automatic linting and formatting.

To start development:

```bash
npm install
npm run dev
```

Run linter and prettier:

```bash
npm run lint:fix    # Run eslint and fix
npm run lint:format # Run prettier and format
npm run lint        # Run both
```

## Deployment

To deploy the project to github page, just push the code to `main` branch. The github action will automatically build and deploy the code.
