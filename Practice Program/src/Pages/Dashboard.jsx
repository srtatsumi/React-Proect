// eslint-disable-next-line
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

  return (
    <>
      Dashboard
      <div>v</div>
    </>
  );
};

export default Dashboard;
