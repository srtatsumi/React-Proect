// eslint-disable-next-line
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import useValidateUser from "../Hook/useValidateUser";
import { auth } from "../App";

const Dashboard = () => {
  const Navigate = useNavigate();
  // const [loading, isauthenticated] = useValidateUser();
  // useEffect(() => {
  //   if (!loading && !isauthenticated) {
  //     Navigate("/login");
  //   }
  //   console.log("Check", isauthenticated);
  // }, [isauthenticated]);

  // if (loading) {
  //   return <p>Loading....</p>;
  // }
  const contextType = auth;
  console.log(contextType._currentValue);
  return (
    <>
      Dashboard
      <div>v</div>
    </>
  );
};

export default Dashboard;
