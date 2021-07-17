import React, { useState } from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";
import AddSong from "./AddSong";
import Header from "./Header";

const App = () => {
  //   const onChangeName = () => {
  //     setAppName("New Name");
  //   };
  const [appName, setAppName] = useState("Old Name");
  return (
    <div className="ui container grid">
      <div className="ui row">
        <Header appName2={appName} setAppName={setAppName} />
        <div className="column twelve wide">
          <AddSong />
        </div>
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
