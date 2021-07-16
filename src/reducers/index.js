import { SELECT_SONG, ADD_SONG, DELETE_SONG } from "../actions";

const initialState = {
  songs: [],
  selectedSong: null,
  deletedSong: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SELECT_SONG:
      return { ...state, selectedSong: payload };
    case ADD_SONG:
      return { ...state, songs: [...state.songs, payload] };

    //   const newSongs = [...state.songs].push(action.payload);
    //    OR newSongs.push(action.payload);
    //   const newState = { ...state, songs: newSongs};
    case DELETE_SONG:
      const newSongList = [...state.songs].filter(
        (song) => song !== action.payload
      );
      return { ...state, songs: newSongList };
    default:
      return state;
  }
};
export default reducer;
