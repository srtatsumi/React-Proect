// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import axios from "axios";

const useValidateUser = () => {
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem("authenticated")
  );

  const [loading, setloading] = useState(true);
  const [isauthenticated, setisauthenticated] = useState(false);

  useEffect(() => {
    setloading(true);
    if (authenticated) {
      axios
        .get(
          `https://beefylaugh.backendless.app/api/users/isvalidusertoken/${authenticated}`
        )
        .then(function (response) {
          if (response.data === true) {
            setloading(false);
            setisauthenticated(true);
          } else {
            setauthenticated(null);
            setisauthenticated(false);
          }
        })
        .catch(function (error) {
          alert(error.response.data.message);
          setloading(false);
        });
    }
  }, [authenticated]);

  return [authenticated, loading, isauthenticated];
};

export default useValidateUser;
