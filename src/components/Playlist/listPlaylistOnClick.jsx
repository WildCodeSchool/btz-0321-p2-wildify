import React from 'react';
import PropTypes from 'prop-types';
import ReturnBtn from '../../img/PlayList/ReturnButton.svg';
import PlayerBtn from '../../img/Icons/PlayerButton.svg';
import AddPl from '../../img/Icons/AddPl.png';

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
      <div className="flex mb-2 justify-between items-center">
        <h1 className="text-white font-scada text-3xl font-bold">{playlistChoice}</h1>
        <button onClick={Return} className="h-3 w-3 mb-2 focus:outline-none transform hover:scale-110">
          <img src={ReturnBtn} alt="ReturnButton" />
        </button>
      </div>
      {!isLoading &&
        myPlaylist &&
        myPlaylist.songs.map((song, index) => {
          return (
            <div
              key={index}
              type="button"
              value={JSON.stringify(song)}
              className="focus:outline-none mb-4 text-white flex justify-between text-left border-b w-full hover:border-mainColor hover:text-mainColor">
              <div className="flex pointer-events-none flex-wrap items-center text-white mt-4  border-white pr-3 mb-2 hover:border-mainColor hover:text-mainColor transform hover:scale-105">
                <div className="font-scada text-xs font-bold mr-2 900:text-base">{song.title} -</div>
                <div className="font-scada text-xs">{song.artist.name}</div>
              </div>
              <div className="flex">
                <button
                  className="focus:outline-none w-10 flex justify-end items-end pb-4 pr-1 text-white transform hover:scale-125"
                  value={JSON.stringify(song)}
                  onClick={handleClick}>
                  <img className="pointer-events-none 900:w-5 w-6 900:h-5 h-6" src={PlayerBtn} alt="" />
                </button>
                <button
                  value={JSON.stringify(song)}
                  className="focus:outline-none w-10 flex justify-end items-end pb-4 pr-2 text-white transform hover:scale-125"
                  onClick={handleClick2}>
                  <img src={AddPl} className="pointer-events-none 900:w-5 w-6 900:h-5 h-6" alt="" />
                </button>
              </div>
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
