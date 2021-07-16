export const SELECT_SONG = "SELECT_SONG";
export const ADD_SONG = "ADD_SONG";
export const DELETE_SONG = "DELETE_SONG";

export const selectSong = (song) => {
  return {
    type: SELECT_SONG,
    payload: song,
  };
};

export const addSong = (song) => {
  return {
    type: ADD_SONG,
    payload: song,
  };
};

export const deleteSong = (song) => {
  return {
    type: DELETE_SONG,
    payload: song,
  };
};
