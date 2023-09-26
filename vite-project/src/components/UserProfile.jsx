import { useContext } from "react";
import UserContext from "../context/UserContext";

const UserProfile = () => {
  const { user, logoutUser } = useContext(UserContext);

  return (
    <div>
      <h1>{user.name} Profile</h1>
      <button onClick={logoutUser}>Log Out</button>
    </div>
  );
};

export default UserProfile;
