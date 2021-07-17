import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong, deleteSong } from "../actions";
import { useSelector, useDispatch } from "react-redux";

// class SongList extends Component {
//   renderList() {
//     const songs = useSelector((state) => state.songs);
//     const dispatch = useDispatch();
//     // const { songs, selectMySong } = this.props;
//     return songs.map((song) => {
//       return (
//         <div className="item" key={song.title}>
//           <div className="right floated content">
//             <button
//               className="ui button primary"
//               onClick={() => dispatch(selectMySong(song))}
//             >
//               Select
//             </button>
//           </div>
//           <div className="content">{song.title}</div>
//         </div>
//       );
//     });
//   }
//   render() {
//     return <div className="ui divided list">{this.renderList()}</div>;
//   }
// }

const SongList = (props) => {
  const songs = useSelector((state) => state.songs);
  const dispatch = useDispatch();
  // const { songs, selectMySong } = this.props;
  return (
    <div className="ui divided list">
      {!songs ? (
        <div>No song to Show!</div>
      ) : (
        <div>
          {songs.map((song) => (
            <div className="item" key={song.title}>
              <div className="right floated content">
                <button
                  className="ui button teal"
                  onClick={() => dispatch(selectSong(song))}
                >
                  Select
                </button>
                <button
                  className="ui button red"
                  onClick={() => props.deleteSongAction(song.id)}
                >
                  Delete
                </button>
              </div>
              <div className="content">{song.title}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   console.log(state);
//   return { songs: state.songs };
// };
// const mapDispatchToProps = () => {
//   return { selectMySong: selectSong };
// };
// export default connect(mapStateToProps, { selectMySong: selectSong })(SongList);

export default connect(null, { deleteSongAction: deleteSong })(SongList);
