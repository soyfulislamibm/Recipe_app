Next.js Recipe App

Description
The Next.js Recipe App is a modern web application designed to provide a comprehensive collection of recipes using data sourced from the Spoonacular API. This app is built with Vite, a fast build tool, and Next.js, which offers robust server-side and client-side rendering capabilities. It leverages TanStack Query for efficient data fetching, Zustand for state management, and utilizes Material UI and Tailwind CSS to create a responsive, visually appealing, and user-friendly interface. Additionally, the app undergoes rigorous testing with Cypress for end-to-end testing and Vitest for unit tests to ensure a high-quality user experience across all devices.

## Getting Started

To get started with the Next.js Recipe App, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/soyfulislamibm/Recipe_app.git
   cd foodie_app
   ```

2. **Install packages**
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
