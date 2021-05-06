import React from 'react';
import PropTypes from 'prop-types';
import Defaultimg from '../../../img/defaultPicture.png';

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
    <div className="h-full w-full p-4">
      <ul className="w-full h-full bg-center bg-no-repeat bg-cover rounded-3xl bg-blend-lighten">
        {item
          .filter((song) => song.album.title.includes(albumChoice))
          .map((song, index) => {
            return (
              <div
                className="focus:outline-none  mb-4 text-white flex flex-col text-left pb-2 border-b w-full hover:border-mainColor hover:text-mainColor"
                key={index}
                value={JSON.stringify(song)}
                onBlur={handleClick}>
                <div className="flex pointer-events-none items-center">
                  <div
                    className="pointer-events-none flex h-12 w-12 mr-2 rounded-full"
                    style={{
                      backgroundImage: `url(${song.album.picture === null ? Defaultimg : song.album.picture})`,
                      backgroundSize: `cover`,
                      backgroundRepeat: `no-repeat`,
                      backgroundPosition: `center`,
                    }}></div>
                  {song.title}
                </div>
                <button value={JSON.stringify(song)} className="text-white" onClick={handleClick2}>
                  XX
                </button>
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
