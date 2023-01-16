// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import axios from "axios";

const useLogout = () => {
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem("authenticated")
  );
  useEffect(() => {
    if (authenticated) {
      axios
        .post("https://beefylaugh.backendless.app/api/users/login", {
          "user-token": authenticated,
        })
        .then(function (response) {})
        .catch(function (error) {});
    }
  });
  return <div>useLogout</div>;
};

export default useLogout;
