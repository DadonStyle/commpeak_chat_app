# CommPeak Chat App

A modern, real-time chat application built with React, TypeScript, and Vite. Features a clean inbox interface with conversation management, message threading, and dynamic placeholder support.

## 🚀 Features

- **Conversation Management** - Browse and select conversations from a searchable contact list
- **Real-time Messaging** - Send and receive messages with timestamp formatting
- **Message Templates** - Dynamic placeholder system for personalized messages ([first_name], [last_name], etc.)
- **Date Grouping** - Messages are automatically grouped by date with smart separators (Today, Yesterday, DD.MM.YYYY)
- **Search Functionality** - Real-time contact search with debouncing
- **Responsive Design** - Clean, modern UI with proper mobile support

## 📁 Folder Structure

```
src/
├── api/                    # Mock data (JSON files)
├── assets/                 # Static assets (SVGs, images)
├── components/             # Stateless UI components
│   ├── avatar/
│   ├── contacts-list/
│   ├── date-separator/
│   ├── message-bubble/
│   ├── message-input/
│   ├── messages-area/
│   └── search-bar/
├── hooks/                  # Custom React hooks
│   ├── useDebounce.ts
│   └── useScrollBottom.ts
├── modules/                # Core business logic modules
│   ├── conversations/      # Conversation management
│   └── side-bar/          # Sidebar with contacts
├── types/                  # TypeScript type definitions
└── utils.ts               # Utility functions
```

### Architecture Philosophy

- **`/components`** - Stateless, reusable UI components that focus purely on presentation
- **`/modules`** - Core application modules that contain business logic and state management
- **`/hooks`** - Custom React hooks for shared logic
- **`/types`** - Centralized TypeScript interfaces and types
- **`/utils`** - Pure utility functions

This separation ensures clear responsibility boundaries and makes the codebase more maintainable and testable.

## 🛠️ Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd commpeak_chat_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🧰 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🏗️ Tech Stack

- **React 18** - UI library with hooks
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **CSS Modules** - Scoped styling solution
- **ESLint** - Code linting and formatting
