import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LogIn from "./components/Login";
import Registration from "./components/Registration";
import LogOut from "./components/LogOut";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "logowanie",
      element: <LogIn />,
    },
    {
      path: "rejestracja",
      element: <Registration />,
    },
    {
      path: "wylogowano",
      element: <LogOut />,
    },
  ]);

export default router;
