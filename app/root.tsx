import React from "react";
import { Outlet } from "react-router-dom"; // Use react-router-dom for basic routing
import "./app.css";

// Syncfusion license fix for Vite + CommonJS
import pkg from "@syncfusion/ej2-base";
const { registerLicense } = pkg;
registerLicense(import.meta.env.VITE_SYNCFUSION_LICENSE_KEY);

// Minimal Layout component
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Worldly App</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
        />
      </head>
      <body>
        <h1>I hate you</h1>
        {children}
      </body>
    </html>
  );
}

// Minimal App component
export default function App() {
  return <Outlet />;
}

// Minimal error boundary
export function ErrorBoundary({ error }: { error: unknown }) {
  console.error(error);
  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>Oops! Something went wrong.</h1>
      <p>{error instanceof Error ? error.message : "Unknown error"}</p>
    </main>
  );
}
