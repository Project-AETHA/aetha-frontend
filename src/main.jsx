import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { AuthContextProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <AuthContextProvider>
          <main className="text-foreground bg-background">
            <App />
          </main>
        </AuthContextProvider>
      </NextThemesProvider>
    </NextUIProvider>
  </React.StrictMode>
);
