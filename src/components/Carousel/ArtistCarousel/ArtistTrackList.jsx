import React from 'react';
import PropTypes from 'prop-types';
import Defaultimg from '../../../img/defaultPicture.png';
import Wave from '../../../img/wavegreen.gif';

function ArtistTrackList({ item, artistChoice, setSelectedSong, displayNone, setDisplayNone, songTitle, setSongTitle }) {
  const handleClick = (e) => {
    const mySong = item.filter((song) => song.title.includes(e.target.value));
    setSelectedSong(mySong);
    setDisplayNone('flex');
    setSongTitle(e.target.value);
  };
  return (
    <div className="h-full w-full px-4 900:px-6">
      <ul className="w-full h-full bg-center bg-no-repeat bg-cover rounded-3xl bg-blend-lighten">
        {item
          .filter((song) => song.artist.name.includes(artistChoice))
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
                      backgroundImage: `url(${song.artist.picture === null ? Defaultimg : song.artist.picture})`,
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

export default ArtistTrackList;

ArtistTrackList.propTypes = {
  item: PropTypes.array.isRequired,
  artistChoice: PropTypes.string.isRequired,
  setSelectedSong: PropTypes.func.isRequired,
  displayNone: PropTypes.string.isRequired,
  setDisplayNone: PropTypes.func.isRequired,
  songTitle: PropTypes.any.isRequired,
  setSongTitle: PropTypes.func.isRequired,
};
