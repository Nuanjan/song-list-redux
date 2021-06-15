import {combinedReducers} from 'redux';

const songReducer = () => {
return [
    {title: 'No Scrub', duration: '4:05'},
    {title: ' Macarena', duration: '2:30'},
    {title: 'Al Star', duration: '3:15'},
    {title: 'I Want it That Way', duration: '1:45'}
];
};

const selectedSongReducer = (selectedSong = null, action) => {
if(action.type === 'SONG_SELECTED') {
    return action.payload;
}
return selectedSong;
};

export default combinedReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})