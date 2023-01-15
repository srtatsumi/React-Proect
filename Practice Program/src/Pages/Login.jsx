// eslint-disable-next-line
import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  // const [token,setToken]=useState('user-token')

  const updateInputValue = (e) => {
    setInput(e);
  };
  const updatePwdValue = (e) => {
    setPassword(e);
  };

  const checkLogin = () => {
    if (input && password) {
      axios
        .post("https://beefylaugh.backendless.app/api/users/login", {
          login: input,
          password: password,
        })
        .then(function (response) {
          if (
            response.status === 200 &&
            response.data.userStatus === "ENABLED"
          ) {
            localStorage.setItem("authenticated", response.data["user-token"]);
            alert("You have been logged in successfully!!");
          }
        })
        .catch(function (error) {
          alert(error.response.data.message);
        });
    } else {
      alert("Please insert ID and Password");
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          onKeyUp={(e) => updateInputValue(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          onKeyUp={(e) => updatePwdValue(e.target.value)}
          placeholder="Password"
        />
        <input type="button" value="Login" onClick={checkLogin} />
      </div>
    </>
  );
};

export default Login;
