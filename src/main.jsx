import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LoginContextProvider from "./assets/contexts/LoginContext.jsx";
import { ThemeProvider, createTheme } from '@mui/material/styles';

//? Importing Fonts
import "typeface-poppins";

const theme = createTheme({
  palette: {
    mode: 'light'
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </LoginContextProvider>
  </React.StrictMode>
);
