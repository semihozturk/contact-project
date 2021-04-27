import React from "react";
import LoginComponent from "../../components/Login/index.js";
const Login = () => {
  const [value, onChangeText] = React.useState("");
  return (
    <LoginComponent />
  )
}

export default Login;