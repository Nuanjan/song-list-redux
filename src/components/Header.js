import React from "react";

const Header = ({ appName2, setAppName }) => {
  return (
    <div>
      <h1>{appName2}</h1>
      <button onClick={() => setAppName("New Name")}>change name</button>
    </div>
  );
};

export default Header;
