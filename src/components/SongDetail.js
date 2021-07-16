import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song)
    return <h1>You haven't select the song yet, Please select a song!</h1>;
  return (
    <div>
      <h1>Song Detail</h1>
      <p>{song.title}</p>
      <p>{song.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps, null)(SongDetail);
