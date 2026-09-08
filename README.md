# AlgoSphere

A modern web application built to visualize and teach algorithms and data structures through interactive code snippets, complexity charts, and reference tables. This project leverages the power of the **TanStack** ecosystem (Router, Start), **React**, and **Tailwind CSS** to provide an interactive learning experience.

- Live site: [algosphere](https://algosphere101.netlify.app/)

## Features

- **Interactive Code Snippets**: Fully implemented code examples for hundreds of algorithms and data structures across four difficulty levels — Fundamentals, Core, Advance, and Patterns.
- **Big-O Complexity Chart**: An SVG-based visual chart mapping time complexity classes (O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ), O(n!)).
- **Reference Tables**: Detailed Data Structure Operations and Sorting Algorithms tables with best, average, and worst-case time and space complexities.
- **Algorithm Cards**: A curated collection of common algorithms with descriptions and time/space complexity at a glance.
- **Global Search**: Instant search across all algorithm implementations from the header navigation.
- **Modern UI**: Built with Tailwind CSS for a sleek, responsive design with a dark-themed interface.
- **Type-Safe Routing**: Utilizes TanStack Router for robust and type-safe navigation.

## Tech Stack

- **Framework**: [React](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [TanStack Router](https://tanstack.com/router) & [TanStack Start](https://tanstack.com/start)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Testing**: [Vitest](https://vitest.dev/) & [Testing Library](https://testing-library.com/)
- **Language**: TypeScript

## Project Structure

```
src/
├── components/         # Reusable UI components and code implementations
│   ├── RoutesImplementation/ # Main page content for each route (Home, Fundamentals, Core, Advance, Patterns)
│   ├── CodeImplementation/   # Individual algorithm and data structure code snippets
│   │   ├── array/            # Array algorithms (Prefix Sum, Sliding Window, Two Pointers, String Building)
│   │   ├── binary_search/    # Binary search variations
│   │   ├── binary_tree/      # Binary tree traversals (BFS, DFS)
│   │   ├── bit_manipulation/ # Bit manipulation operations (Set/Clear/Test/Toggle Kth Bit)
│   │   ├── data_structures/  # Data structures (Array, Stack, Queue, Linked List, HashMap, BST, Trie, Graph, Union Find)
│   │   ├── dynamic_programming/ # DP implementations (Kadane, Bottom-Up, Top-Down)
│   │   ├── graph/            # Graph algorithms (BFS, DFS, Dijkstra, Bellman-Ford, Kruskal, Prim, Kahn, Topological Sort)
│   │   ├── hash_map/         # Hash map based algorithms
│   │   ├── heap/             # Heap-based algorithms
│   │   ├── linked_list/      # Linked list operations
│   │   ├── matrix/           # Matrix operations (Copy, Diagonals, Rotate/Transpose)
│   │   ├── sorting_algorithms/ # Sorting algorithms (Bubble, Insertion, Selection, Merge, Quick, Heap, etc.)
│   │   ├── stack/            # Stack-based problems (Monotonic stacks)
│   │   └── backtracking/     # Backtracking algorithms
│   ├── Notations/        # Big-O chart, Data Structure Operations table, Sorting Algorithms table
│   ├── CardLayout/       # Algorithm cards with time/space complexity
│   ├── Header/           # Navigation header with global search
│   ├── Footer/           # Footer with navigation links
│   ├── HeroSection/      # Landing hero section
│   ├── Loading/          # Loading component
│   ├── NotFound/         # 404 page
│   └── links.jsx         # Searchable links data for global search
├── routes/             # TanStack Router file-based route definitions
├── styles.css          # Global styles and Tailwind directives
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, Big-O chart, reference tables, and algorithm cards |
| `/fundamentals` | Core algorithms: Sliding Window, Prefix Sum, Two Pointers, Binary Search, BFS/DFS, HashMap, Sorting, Kadane, Dijkstra, Union Find, Bit Manipulation |
| `/core` | Essential data structures and algorithms: Arrays, Stacks, Queues, Linked Lists, Hash Maps, Binary Trees, Matrix operations, Monotonic Stacks |
| `/advance` | Advanced data structures and algorithms: Graphs, BSTs, Tries, Union Find, Bit Manipulation, Graph algorithms (Bellman-Ford, Kruskal, Prim, Dijkstra, Kahn, Topological Sort), 10+ sorting algorithms |
| `/patterns` | Pattern-based problems: Backtracking, Binary Search patterns, Greedy, Dynamic Programming (Top-Down/Bottom-Up), Hash Map patterns, Heap problems, Sorting |

## Getting Started

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

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run serve`: Previews the production build locally.
- `npm run test`: Runs the test suite using Vitest.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run format`: Formats the code using Prettier.
- `npm run check`: Runs both Prettier and ESLint to verify code style and quality.
