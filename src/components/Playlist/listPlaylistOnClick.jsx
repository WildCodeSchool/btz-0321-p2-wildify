import React from 'react';
import PropTypes from 'prop-types';
import ReturnBtn from '../../img/PlayList/ReturnButton.svg';

function ListPlaylistOnClick({ isLoading, Return, setSelectedSong, myPlaylist, setAddPlaylist, playlistChoice }) {
  const handleClick = (e) => {
    setSelectedSong(JSON.parse(e.target.value));
  };
  const handleClick2 = (e) => {
    let result = localStorage.getItem('myPlaylist') ? JSON.parse(localStorage.getItem('myPlaylist')) : [];
    result.push(JSON.parse(e.target.value));
    setAddPlaylist(result);
    localStorage.setItem('myPlaylist', JSON.stringify(result));
  };
  return (
    <div className="p-6  900:p-10 ">
      <h1 className="text-white font-scada text-3xl font-bold">{playlistChoice}</h1>
      <div className="flex  justify-between items-center">
        <button onClick={Return} className="h-3 w-3   focus:outline-none transform hover:scale-110">
          <img src={ReturnBtn} alt="ReturnButton" />
        </button>
      </div>
      {!isLoading &&
        myPlaylist &&
        myPlaylist.songs.map((song, index) => {
          return (
            <div key={index} type="button" value={JSON.stringify(song)} className="bg  p-1 w-full focus:outline-none">
              <div className="flex pointer-events-none flex-wrap items-center text-white mt-4 border-b border-gra border-white pb-1 mb-2 hover:border-mainColor hover:text-mainColor transform hover:scale-105">
                <div className="font-scada text-xs font-bold mr-2 900:text-base">{song.title} -</div>
                <div className="font-scada text-xs ">{song.artist.name}</div>
              </div>
              <button value={JSON.stringify(song)} onClick={handleClick}>
                PLAY
              </button>
              <button value={JSON.stringify(song)} onClick={handleClick2}>
                ADD
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default ListPlaylistOnClick;

ListPlaylistOnClick.propTypes = {
  playLists: PropTypes.array.isRequired,
  Return: PropTypes.func.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
  playlistChoice: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  setSelectedSong: PropTypes.func.isRequired,
  myPlaylist: PropTypes.object,
  setAddPlaylist: PropTypes.func.isRequired,
};
