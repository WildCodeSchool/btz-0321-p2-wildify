import React from 'react';
import PropTypes from 'prop-types';
import Defaultimg from '../../../img/defaultPicture.png';
import AddPl from '../../../img/Icons/AddPl.png';
import PlayerBtn from '../../../img/Icons/PlayerButton.svg';

function AlbumTrackList({ item, albumChoice, setSelectedSong, setMyPlaylist, setIsPlaylist }) {
  const handleClick = (e) => {
    setSelectedSong(JSON.parse(e.target.value));
    setIsPlaylist(false);
  };

  const handleClick2 = (e) => {
    let result = localStorage.getItem('myPlaylist') ? JSON.parse(localStorage.getItem('myPlaylist')) : [];
    result.push(JSON.parse(e.target.value));
    setMyPlaylist(result);
    localStorage.setItem('myPlaylist', JSON.stringify(result));
  };

  return (
    <div className="h-full w-full p-4 900:px-6">
      <ul className="w-full h-full bg-center bg-no-repeat bg-cover rounded-3xl bg-blend-lighten">
        {item
          .filter((song) => song.album.title.includes(albumChoice))
          .map((song, index) => {
            return (
              <div className="focus:outline-none  mb-4 text-white flex justify-between text-left pb-2 border-b w-full" key={index}>
                <div className="flex pointer-events-none items-center">
                  <div
                    className="pointer-events-none flex h-12 w-12 mr-4 rounded-full"
                    style={{
                      backgroundImage: `url(${song.album.picture === null ? Defaultimg : song.album.picture})`,
                      backgroundSize: `cover`,
                      backgroundRepeat: `no-repeat`,
                      backgroundPosition: `center`,
                    }}></div>
                  <div className="flex-col">
                    <h1 className="pointer-events-none font-scada mr-2 font-bold">{song.title}</h1>
                    <h1 className="pointer-events-none ml-2 text-xs">{song.artist.name}</h1>
                  </div>
                </div>
                <div className="flex">
                  <button
                    className="focus:outline-none w-10 flex justify-end items-end pb-2 pr-2 text-white transform hover:scale-125"
                    value={JSON.stringify(song)}
                    onClick={handleClick}>
                    <img className="pointer-events-none w-6 h-6" src={PlayerBtn} alt="" />
                  </button>
                  <button
                    value={JSON.stringify(song)}
                    className="focus:outline-none w-10 flex justify-end items-end pb-2 pr-2 text-white transform hover:scale-125"
                    onClick={handleClick2}>
                    <img src={AddPl} className="pointer-events-none w-6 h-6" alt="" />
                  </button>
                </div>
              </div>
            );
          })}
      </ul>
    </div>
  );
}

export default AlbumTrackList;

AlbumTrackList.propTypes = {
  item: PropTypes.array.isRequired,
  albumChoice: PropTypes.string.isRequired,
  setSelectedSong: PropTypes.func.isRequired,
  setMyPlaylist: PropTypes.func.isRequired,
  setIsPlaylist: PropTypes.func.isRequired,
};
