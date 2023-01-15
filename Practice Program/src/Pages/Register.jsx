import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [input, setInput] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const updateValueChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  const register = () => {
    const name =
      input.firstName + " " + input.middleName + " " + input.lastName;
    if (input.password === input.cpassword) {
      axios
        .post("https://beefylaugh.backendless.app/api/users/register", {
          name: name,
          email: input.email,
          password: input.password,
          userStatus: "ENABLED",
        })
        .then(function (response) {
          if (response.status == 200) {
            alert("You have been registered in successfully!!");
          }
        })
        .catch(function (error) {
          alert(error.response.data.message);
        });
    } else {
      alert("Please Check your password");
    }
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={(e) => updateValueChange(e)}
        />
        <input
          type="text"
          name="middleName"
          placeholder="Middle Name"
          onChange={(e) => updateValueChange(e)}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={(e) => updateValueChange(e)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => updateValueChange(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => updateValueChange(e)}
        />
        <input
          type="password"
          name="cpassword"
          placeholder="Confirm Password"
          onChange={(e) => updateValueChange(e)}
        />
        <input type="button" value="Register" onClick={register} />
      </div>
    </>
  );
};

export default Register;
