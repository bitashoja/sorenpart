import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import AuthLayout from "./Layout/AuthLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Question from "./pages/Question";
import LogIn from "./pages/LogIn";
import Rejester from "./pages/Rejester";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "question",
        element: <Question />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LogIn />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "register",
        element: <Rejester />,
      },
    ],
  },
]);