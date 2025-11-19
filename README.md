# AlgoSphere

A modern web application built to visualize and teach algorithms and data structures. This project leverages the power of the **TanStack** ecosystem (Router, Start) and **React** to provide an interactive learning experience.

- Live site      [algosphere](https://algosphere101.netlify.app/)

##  Features

- **Educational Routes**: Structured learning paths including Fundamentals, Core Concepts, Advanced Topics, and Patterns.
- **Modern UI**: Built with Tailwind CSS for a sleek, responsive design.
- **Type-Safe Routing**: Utilizes TanStack Router for robust and type-safe navigation.

##  Tech Stack

- **Framework**: [React](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [TanStack Router](https://tanstack.com/router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Testing**: [Vitest](https://vitest.dev/) & [Testing Library](https://testing-library.com/)
- **Language**: TypeScript

##  Project Structure

```
src/
├── components/         # Reusable UI components and route implementations
│   ├── RoutesImplementation/ # Main page content for each route
│   ├── Notations/      # Charts and tables for algorithm data
│   ├── links/          # Navigation links for cards in card layout
│   └── ...
├── routes/             # TanStack Router file-based route definitions
└── styles.css          # Global styles and Tailwind directives
```

##  Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Node.js (Latest LTS recommended)
- npm, pnpm, or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dragon-slayer99/Algo_Sphere.git
   cd Algo_Sphere
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

##  Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run serve`: Previews the production build locally.
- `npm run test`: Runs the test suite using Vitest.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run format`: Formats the code using Prettier.
- `npm run check`: Runs both Prettier and ESLint to verify code style and quality.
