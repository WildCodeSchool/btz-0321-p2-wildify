import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Defaultimg from '../../../img/defaultPicture.png';
import Wave from '../../../img/wavegreen.gif';

function AlbumTrackList({ item, albumChoice, setSelectedSong }) {
  const [displayNone, setDisplayNone] = useState('none');
  const [songTitle, setSongTitle] = useState();
  const handleClick = (e) => {
    const mySong = item.filter((song) => song.title.includes(e.target.value));
    setSelectedSong(mySong);
    setDisplayNone('flex');
    setSongTitle(e.target.value);
  };

  return (
    <div className="h-full w-full p-4">
      <ul className="w-full h-full bg-center bg-no-repeat bg-cover rounded-3xl bg-blend-lighten">
        {item
          .filter((song) => song.album.title.includes(albumChoice))
          .map((song, index) => {
            return (
              <button
                className="focus:outline-none  mb-4 text-white flex flex-col text-left pb-2 border-b w-full hover:border-mainColor hover:text-mainColor"
                key={index}
                value={song.title}
                onClick={handleClick}>
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
                  {songTitle === song.title ? <img className="h-12 w-12 opacity-50" style={{ display: `${displayNone}` }} src={Wave} alt="" /> : ''}
                </div>
              </button>
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
};
