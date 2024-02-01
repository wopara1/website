# My Personal Website

My personal portfolio website is crafted in a minimalist and sleek manner, incorporating various features such as Client & Server Components, a dark mode toggle, email sending functionality, an about page, and more.

## Tech Stack

backend:
- [Next.js](nextjs.org) / TypeScript
- [React.Email & Resend] / 
frontend:
- [Type Script](https://www.typescriptlang.org) (App content)
- [Tailwind CSS](https://tailwindcss.com) (Styling)
- [Framer Motion](https://www.framer.com/motion/) (Animations)
- [React.Email & Resend](https://resend.com/docs/introduction) (Email functionality)

## Getting Started

Make sure you have the lastest version of Node.js installed on your machine.

1. **Install Dependencies**: `npm install`
2. **Environment variables**: Copy `.env.example` to a new `.env.local`
3. **Start Developing**: `npm run dev`, this will automatically create the .contentlayer files and start the Next.js development server.

## Deployment

Deploying this project to [Vercel](https://vercel.com/new/clone) is a straightforward process. Just link your Vercel account to your GitHub repository, and Vercel will handle automatic building and deployment whenever there's a new push to the main branch. Additionally, remember to include the project's .env variables in your Vercel project settings.