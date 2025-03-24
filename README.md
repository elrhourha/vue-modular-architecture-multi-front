# Project: Vue Modular Architecture with Multi-Frontend Apps

This project is a modular architecture setup with two Vue.js frontend applications (`university-one-front` and `university-two-front`) and a shared UI component library (`ui-components`). It uses **Vite** for fast development and builds, and **eslint-plugin-vuejs-accessibility** to enforce accessibility best practices.

---

## Project Structure
```
Project
├── apps
│   ├── university-one-front       # First Vue.js frontend application
│   └── university-two-front       # Second Vue.js frontend application
├── packages
│   └── ui-components              # Shared UI component library
├── .gitignore                     # Git ignore file
├── package.json                   # Root package.json
├── pnpm-lock.yaml                 # PNPM lock file
├── pnpm-workspace.yaml            # PNPM workspace configuration
├── tsconfig.json                  # TypeScript configuration
├── site.config.ts                 # Site-specific configuration
├── README.md                      # Project documentation
````

---

---

## Features

- **Multi-Frontend Architecture**: Two independent Vue.js applications sharing a common UI component library.
- **Shared UI Components**: Reusable components in the `ui-components` package.
- **Vite**: Fast and modern build tool for development and production.
- **Accessibility Checks**: Integrated `eslint-plugin-vuejs-accessibility` to enforce accessibility best practices.
- **TypeScript**: Type-safe development across the project.

---

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- PNPM (v7 or higher)

### Installation

1. Clone the repository:
2. Install dependencies:
   ``pnpm install
   ``

3. Build the shared `ui-components` library:
   ``cd packages/ui-components && pnpm build
   ``

4. Running the Applications    ``pnpm dev``
---

## Accessibility Checks

The project uses **eslint-plugin-vuejs-accessibility** to enforce accessibility best practices. To run accessibility checks:

1. Navigate to the desired app or package:
   ``
   cd apps/university-one-front
   ``

2. Run ESLint:
   `` pnpm lint
   ``
