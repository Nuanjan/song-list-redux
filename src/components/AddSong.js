import React, { useState } from "react";

const AddSong = () => {
  const [song, setSong] = useState({});
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const onTitleChange = (title) => {
    console.log(title);
    setTitle(title);
  };
  const onDurationChange = (duration) => {
    console.log(duration);
    setDuration(duration);
  };

  return (
    <div className="ui container">
      <div className="ui action input">
        <input
          type="text"
          placeholder="song name..."
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
        />
        <input
          type="text"
          placeholder="duration..."
          value={duration}
          onChange={(e) => onDurationChange(e.target.value)}
        />
        <button className="ui button">Add Song</button>
      </div>
    </div>
  );
};

export default AddSong;
