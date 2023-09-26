import { useContext } from "react";
import UserContext from "../context/UserContext";

const LoginButton = () => {
  const { loginUser } = useContext(UserContext);

  return <button onClick={loginUser}>Log In</button>;
};

export default LoginButton;
