// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import axios from "axios";

const useValidateUser = () => {
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

  return [loading, isauthenticated];
};

export default useValidateUser;
