import React from 'react';
import PropTypes from 'prop-types';
import ReturnBtn from '../../img/PlayList/ReturnButton.svg';

function ListPlaylistOnClick({ playlistChoice, Return, setCurrentTrack, playLists }) {
  return (
    <div className="p-6 900:p-10 ">
      <div className="flex justify-between items-center">
        <h1 className="text-white font-scada text-3xl font-bold mb-2">{playlistChoice}</h1>

        <button onClick={Return} className="h-3 w-3  focus:outline-none transform hover:scale-110">
          <img src={ReturnBtn} alt="ReturnButton" />
        </button>
      </div>
      {playLists
        .filter((playlist) => playlist.title.includes(playlistChoice))
        .map((playList, key) =>
          playList.songs.map((song, key2) => {
            return (
              <button key={key2} onClick={() => setCurrentTrack(key)} type="button" className="bg p-1 w-full focus:outline-none">
                <div className="flex flex-wrap items-center text-white mt-4 border-b border-gra border-white pb-1 mb-2 hover:border-mainColor hover:text-mainColor transform hover:scale-105">
                  <div className="font-scada text-xs font-bold mr-2 900:text-base">{song.title} -</div>
                  <div className="font-scada text-xs ">{song.artist.name}</div>
                </div>
              </button>
            );
          }),
        )}
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
