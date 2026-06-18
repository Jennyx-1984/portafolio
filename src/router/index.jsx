import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Projects from "../pages/Portfolio";
import Contact from "../pages/Contacto";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Logros from "../pages/Logros";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout, 
    children: [
      { 
        index: true, 
        Component: Home
      },
      { 
        path: "home", 
        element: <Navigate to="/" replace />
      },
      {
        path:"about",
        Component: About
      },
      { 
        path: "contact", 
        Component: Contact 
      },
      { 
        path: "projects", 
        Component: Projects 
      },
      { 
        path: "*", 
        Component: NotFound
      },
      {
        path:"logros",
        Component: Logros
      },
    ],
  },
]);