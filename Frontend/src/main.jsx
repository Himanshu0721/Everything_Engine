import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./Context/ThemeContext";
import { AuthProvider } from "./Components/context/authContext";
import { BrowserRouter } from "react-router-dom";
import { BlogProvider } from "./Context/blogContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <BlogProvider>
            <App />
          </BlogProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
