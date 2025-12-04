# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    # Muslimah Travel — Frontend

    This repository contains the frontend of the Muslimah Travel application, built with React, TypeScript and Vite.

    Summary
    - **Stack:** React, TypeScript, Vite, ESLint
    - **Main source folder:** `src/`
    - **Build tool:** Vite

    Prerequisites
    - Node.js (recommended v18 or newer)
    - npm (or pnpm / yarn)
    - Git

    Installation
    ```bash
    cd frontend
    npm install
    ```

    Available scripts (from `package.json`)
    - `npm run dev` — start development server (Vite with HMR)
    - `npm run build` — production build (TypeScript build + Vite build)
    - `npm run preview` — preview the production build locally
    - `npm run lint` — run ESLint

    Running in development
    ```bash
    cd frontend
    npm install
    npm run dev
    ```

    Build for production
    ```bash
    npm run build
    # optional: preview build
    npm run preview
    ```

    Environment variables
    - If your app needs runtime configuration, create a `.env` file in the `frontend` folder. This file is ignored by git (`.gitignore`).

    Git / Remote repository
    - Remote repository: `https://github.com/Travel-Muslim/Frontend.git` (branch `main`).
    - `node_modules/` is excluded via `.gitignore` and should not be pushed.

    Change local Git author (optional)
    ```bash
    git config user.name "Your Name"
    git config user.email "you@example.com"
    ```

    Contribution guide (short)
    - Create a feature branch: `git checkout -b feat/your-feature`
    - Commit with clear messages, push the branch, and open a Pull Request.

    Security & privacy
    - Do not commit secrets or credentials (e.g. `.env`, API keys). Use secure secret management.

    Contact
    - For help, contact the repository owner or your team lead.

    ---
    _This README was updated automatically on 2025-12-04. Please adapt it to your project's needs._
    <!-- English version created on 2025-12-04 -->
