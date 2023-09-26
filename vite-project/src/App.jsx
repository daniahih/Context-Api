// import React, { useState } from "react";
// import ThemeContext from "./context/ThemeContext";
// import Button from "./components/Btn";

// const App = () => {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <div>
//         Current theme: {theme}
//         <Button />
//       </div>
//     </ThemeContext.Provider>
//   );
// };

// export default App;

import React, { useState } from "react";
import UserContext from "./context/UserContext";
import LoginButton from "./components/LoginButton";
import UserProfile from "./components/UserProfile";

const App = () => {
  const [user, setUser] = useState(null);

  const loginUser = () => {
    // Simulate an authenticated user object
    setUser({ name: "John", id: 1 });
  };

  const logoutUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      <div>{user ? <UserProfile /> : <LoginButton />}</div>
    </UserContext.Provider>
  );
};

export default App;
