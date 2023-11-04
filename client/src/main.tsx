import React from "react";
import ReactDOM from "react-dom/client";
// Styles
import "./styles/global.css";
// React router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserAuthContextProvider } from "./contexts/UserAuthContext";
// Pages
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdoptPage from "./pages/AdoptPage";
import Adoptinfo from "./pages/AdoptInfo";
import AddPostPage from "./pages/AddPostPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/adopt",
    element: <AdoptPage />,
  },
  {
    path: "/adopt/:id",
    element: <Adoptinfo />,
  },
  {
    path: "/addpost",
    element: <AddPostPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <RouterProvider router={router} />
    </UserAuthContextProvider>
  </React.StrictMode>
);
