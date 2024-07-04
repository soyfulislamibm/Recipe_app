Next.js Recipe App

Description
The Next.js Recipe App is a modern web application designed to provide a comprehensive collection of recipes using data sourced from the Spoonacular API. This app is built with Vite, a fast build tool, and Next.js, which offers robust server-side and client-side rendering capabilities. It leverages TanStack Query for efficient data fetching, Zustand for state management, and utilizes Material UI and Tailwind CSS to create a responsive, visually appealing, and user-friendly interface. Additionally, the app undergoes rigorous testing with Cypress for end-to-end testing and Vitest for unit tests to ensure a high-quality user experience across all devices.

## Getting Started

To get started with the Next.js Recipe App, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/SofiaA007/react-node-recipe-app.git
   cd foodie_app
   ```

2. **Install packages**
    ```
  - Install the necessary packages:
    ```bash
    npm install
    ```
  - Create .env file:
    ```bash
    touch .env
    ```
- Spoonacular API:
  - Add the api key to the `API_KEY` variable in the `.env` file

3. **Run application locally**

```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. **Running the cypress tests**:
 - Navigate to the root directory:
 - Install cypress:
     ```bash
     npm install cypress --save-dev
     ```
  ```bash
      npm run cypress:open
     ```



You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
