# Next.js Data Fetching Course

This is a [Next.js](https://nextjs.org) project that demonstrates data fetching patterns and CRUD operations with server actions and client components.

## Features

### 🔄 Next.js Refresh & Data Fetching
- **Server Actions**: Server-side form handling with `"use server"` directive
- **Client Components**: Interactive UI with `"use client"` directive
- **useActionState**: Form state management with loading states and error handling
- **Automatic Refresh**: Pages automatically refresh after data mutations

### 📦 Products CRUD Operations
- **Create**: Add new products with validation
- **Read**: View all products and individual product details
- **Update**: Edit existing products
- **Delete**: Remove products from the database

### 🛠️ Tech Stack
- **Next.js 15**: App Router with server and client components
- **Prisma**: Database ORM with SQLite
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Database Setup
The project uses Prisma with SQLite. The database is already configured and seeded with sample data.

## Project Structure

```
src/
├── actions/          # Server actions for form handling
├── app/             # Next.js app router pages
│   ├── products/    # Product CRUD pages
│   └── users/       # User management pages
├── components/      # Reusable UI components
├── db/             # Database utilities and Prisma client
└── interfaces/     # TypeScript type definitions
```

## Key Concepts Demonstrated

1. **Server Actions**: Form submissions handled on the server
2. **Client-Server Communication**: Seamless data flow between client and server
3. **Form Validation**: Server-side validation with error display
4. **Loading States**: User feedback during async operations
5. **Type Safety**: Full TypeScript integration throughout the stack

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
