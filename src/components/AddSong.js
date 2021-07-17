import React, { useState } from "react";
import { connect } from "react-redux";
import { addSong } from "../actions";

const AddSong = ({ addSongAction }) => {
  //   const [song, setSong] = useState({});
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
  const onAddSong = () => {
    const id = Math.random();
    console.log(id, title, duration);
    addSongAction({ id, title, duration });
  };
  console.log(" this is props");
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
        <button className="ui button yellow" onClick={onAddSong}>
          Add Song
        </button>
      </div>
    </div>
  );
};

export default connect(null, { addSongAction: addSong })(AddSong);
