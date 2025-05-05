import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import { RouterProvider } from "react-router";
import router from "./routes/Router.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import ProductProvider from "./ProductProvider/ProductProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer></ToastContainer>
    <ProductProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </ProductProvider>
  </StrictMode>
);
