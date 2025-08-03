# AI Assistant

A modern AI-powered chat application built with Next.js 15, featuring Google's Gemini AI, secure authentication, and a responsive design with dark/light theme support.

## ✨ Features

- **AI-Powered Chat**: Interactive chat interface powered by Google's Gemini 2.5 Flash model
- **Secure Authentication**: Email/password authentication using Better Auth with PostgreSQL
- **Real-time Streaming**: Streaming AI responses for better user experience
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Theme Support**: Dark/light theme toggle with system preference detection
- **Modern UI**: Built with Radix UI components and shadcn/ui
- **Type-Safe**: Full TypeScript support with form validation using Zod

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router and Turbopack
- **AI Integration**: Google AI SDK (@ai-sdk/google) with Gemini 2.5 Flash
- **Authentication**: Better Auth with PostgreSQL database
- **Styling**: Tailwind CSS v4 with Radix UI components
- **Forms**: React Hook Form with Zod validation
- **Database**: PostgreSQL (configured for Supabase)
- **Type Safety**: TypeScript throughout

## 📋 Prerequisites

- Node.js 18+
- PostgreSQL database (can use Supabase)
- Google AI API key

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd ai-assistant
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   Create a `.env.local` file in the root directory:

   ```env
   # Database
   DATABASE_URL="postgresql://username:password@host:port/database"

   # Authentication
   BETTER_AUTH_SECRET="your-secret-key-here"

   # Google AI
   GOOGLE_GENERATIVE_AI_API_KEY="your-google-ai-api-key"
   ```

4. **Database Setup**

   Make sure your PostgreSQL database is running and accessible. Better Auth will automatically create the necessary tables on first run.

## 🎯 Getting Started

1. **Start the development server**

   ```bash
   npm run dev
   ```

2. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

3. **Create an account**

   You'll be redirected to the login page where you can create a new account using email and password.

4. **Start chatting**

   Once logged in, you can start chatting with the AI assistant powered by Google's Gemini model.

## 📁 Project Structure

```
src/
├── app/                          # App Router pages
│   ├── (homepage)/              # Protected homepage group
│   │   ├── _components/         # Homepage-specific components
│   │   ├── layout.tsx          # Authentication guard
│   │   └── page.tsx            # Main chat interface
│   ├── api/
│   │   └── chat/               # AI chat API endpoint
│   ├── login/                  # Login page
│   ├── layout.tsx              # Root layout with theme provider
│   └── globals.css             # Global styles
├── components/
│   ├── theme/                  # Theme provider and selector
│   └── ui/                     # Reusable UI components (shadcn/ui)
└── lib/
    ├── auth.ts                 # Better Auth configuration
    └── utils.ts                # Utility functions
```

## 🔐 Authentication Flow

- **Protected Routes**: Homepage requires authentication
- **Public Routes**: Login page is accessible to unauthenticated users
- **Auto-redirect**: Users are automatically redirected based on authentication status
- **Session Management**: Secure session handling with Better Auth

## 🎨 UI Components

The application uses a modern component library built on:

- **Radix UI**: Headless, accessible components
- **Tailwind CSS**: Utility-first styling
- **shadcn/ui**: Pre-built component patterns
- **Lucide React**: Beautiful, customizable icons

## 🤖 AI Integration

- **Model**: Google Gemini 2.5 Flash
- **Streaming**: Real-time response streaming
- **Context**: Maintains conversation context
- **System Prompt**: Configured as a helpful assistant

## 📱 Responsive Design

- Mobile-first approach with responsive breakpoints
- Optimized for various screen sizes
- Touch-friendly interface elements
- Adaptive layout components

## 🛠️ Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix

## 🔧 Configuration

### Theme Configuration

The app supports automatic theme detection and manual theme switching. Themes are configured in the root layout with `next-themes`.

### Authentication Configuration

Better Auth is configured with email/password authentication and PostgreSQL session storage.

### AI Configuration

The chat API uses Google's AI SDK with the Gemini 2.5 Flash model for optimal performance and cost efficiency.

## 🚀 Deployment

This application can be deployed on any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **Railway**
- **Self-hosted**

Make sure to set the required environment variables in your deployment platform.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
