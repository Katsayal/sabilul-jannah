# Sabilul Jannah Foundation Website

This is the frontend and serverless backend for the Sabilul Jannah Foundation website, built with React, Vite, TypeScript, and Tailwind CSS. The backend is powered by Netlify Functions.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation

1.  Clone the repository.
2.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To start the local development server, run:

```bash
npm run dev
```

This will start the Vite development server and the Netlify functions emulator. The website will be available at `http://localhost:5173`.

## Project Structure

```
frontend/
├── netlify/
│   └── functions/       # Serverless functions (contact, newsletter, volunteer)
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, icons
│   ├── components/      # Reusable React components (Navbar, Footer, forms)
│   ├── hooks/           # Custom React hooks
│   ├── layouts/         # Layout components (MainLayout)
│   ├── pages/           # Page components for each route
│   ├── services/        # Services for APIs (e.g., Sanity)
│   ├── styles/          # Global styles
│   ├── App.tsx          # Main app component with routing
│   └── main.tsx         # Entry point of the application
└── index.html           # Main HTML file
```

## Environment Variables

For the application to function correctly, especially when deployed, you need to set up the following environment variables in your Netlify project settings:

-   `MONGODB_URI`: The connection string for your MongoDB Atlas database. This is used by the Netlify functions to store form submissions.
-   `VITE_SANITY_PROJECT_ID`: The project ID for your Sanity.io project.
-   `VITE_SANITY_DATASET`: The dataset you are using in your Sanity.io project (e.g., `production`).

To use these in development, you can create a `.env` file in the `frontend` directory:

```
VITE_SANITY_PROJECT_ID="your-project-id"
VITE_SANITY_DATASET="production"
```

*Note: The `MONGODB_URI` is used by the serverless functions and should be set in the Netlify UI, not in the `.env` file, to avoid exposing it on the client-side.*

## 🚀 Deployment

The project is set up for deployment on Netlify.

1.  **Push your code** to a GitHub repository.
2.  **Connect your repository** to a new site in Netlify.
3.  **Configure the build settings**:
    -   **Build command**: `npm run build`
    -   **Publish directory**: `dist`
4.  **Add your environment variables** in the Netlify site settings (under "Site settings" > "Build & deploy" > "Environment").
5.  **Deploy!**

## Headless CMS (Sanity.io)

The blog and some page content are managed through Sanity.io.

-   **To set up Sanity**, you can run `npm create sanity@latest` in a separate directory and follow the instructions.
-   **Define your schemas** in the Sanity project. This project assumes schemas for `post` (for blog posts) and `page` (for pages like "About").
-   **Connect the frontend** by setting the `VITE_SANITY_PROJECT_ID` and `VITE_SANITY_DATASET` environment variables.
