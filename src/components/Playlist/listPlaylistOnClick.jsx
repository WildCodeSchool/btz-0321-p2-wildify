import React from 'react';
import PropTypes from 'prop-types';
import ReturnBtn from '../../img/PlayList/ReturnButton.svg';

function ListPlaylistOnClick({ playlistChoice, isLoading, Return, setCurrentTrack, playLists, setSelectedSong, myPlaylist }) {
  const handleClick = (e) => {
    console.log(JSON.parse(e.target.value));
    setSelectedSong(JSON.parse(e.target.value));
  };
  return (
    <div className="p-6 900:p-10 ">
      <div className="flex justify-between items-center">
        <button onClick={Return} className="h-3 w-3  focus:outline-none transform hover:scale-110">
          <img src={ReturnBtn} alt="ReturnButton" />
        </button>
      </div>
      {!isLoading &&
        myPlaylist &&
        myPlaylist.songs.map((song, index) => {
          return (
            <button key={index} onClick={handleClick} type="button" value={JSON.stringify(song)} className="bg p-1 w-full focus:outline-none">
              <div className="flex pointer-events-none flex-wrap items-center text-white mt-4 border-b border-gra border-white pb-1 mb-2 hover:border-mainColor hover:text-mainColor transform hover:scale-105">
                <div className="font-scada text-xs font-bold mr-2 900:text-base">{song.title} -</div>
                <div className="font-scada text-xs ">{song.artist.name}</div>
              </div>
            </button>
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
};
