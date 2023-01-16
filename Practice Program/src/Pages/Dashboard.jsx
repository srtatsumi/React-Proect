// eslint-disable-next-line
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useValidateUser from "../Hook/useValidateUser";

const Dashboard = () => {
  const Navigate = useNavigate();

  const [authenticated, loading, isauthenticated] = useValidateUser();
  useEffect(() => {
    if (!isauthenticated && authenticated === null) {
      window.alert("You are not logged in! Please Login");
      Navigate("/login");
    }
  }, [Navigate, authenticated, isauthenticated, loading]);

  if (loading) {
    return <p>Loading....</p>;
  }
  const logout = () => {
    const authenticated = localStorage.getItem("authenticated");
    if (authenticated) {
      // axios
      //   .post("https://beefylaugh.backendless.app/api/users/logout", {
      //     "user-token": authenticated,
      //   })
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
      alert("You have been logged out!!");
      localStorage.removeItem("authenticated");
      Navigate("/login");
    }
  };

  return (
    <>
      Dashboard
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Dashboard;
