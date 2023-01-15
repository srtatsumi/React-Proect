import React, { createContext, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import axios from "axios";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Page404 from "./Pages/Page404";
import Register from "./Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Page404 />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const auth = createContext();

const App = () => {
  const [authenticated, setauthenticated] = useState("");
  const [loading, setloading] = useState(true);
  const [isauthenticated, setisauthenticated] = useState(false);

  const loggedInUser = localStorage.getItem("authenticated");
  useEffect(() => {
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, [loggedInUser]);

  useEffect(() => {
    setloading(true);
    if (authenticated) {
      axios
        .get(
          `https://beefylaugh.backendless.app/api/users/isvalidusertoken/${authenticated}`
        )
        .then(function (response) {
          setloading(false);
          setisauthenticated(true);
        })
        .catch(function (error) {
          alert(error.response.data.message);
          setloading(false);
        });
    }
  }, [authenticated]);

  return (
    <>
      <auth.Provider value={isauthenticated}>
        <RouterProvider router={router} />
      </auth.Provider>
    </>
  );
};

export default App;
export { auth };
