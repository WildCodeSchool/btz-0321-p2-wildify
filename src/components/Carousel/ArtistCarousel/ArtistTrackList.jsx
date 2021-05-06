import React from 'react';
import PropTypes from 'prop-types';
import Defaultimg from '../../../img/defaultPicture.png';

function ArtistTrackList({ item, artistChoice, setSelectedSong, setMyPlaylist }) {
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
    <div className="h-full w-full px-4 900:px-6">
      <ul className="w-full h-full bg-center bg-no-repeat bg-cover rounded-3xl bg-blend-lighten">
        {item
          .filter((song) => song.artist.name.includes(artistChoice))
          .map((song, index) => {
            return (
              <button
                className="focus:outline-none  mb-4 text-white flex flex-col text-left pb-2 border-b w-full hover:border-mainColor hover:text-mainColor"
                key={index}
                value={JSON.stringify(song)}
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
                </div>
                <button value={JSON.stringify(song)} className="text-white" onClick={handleClick2}>
                  XX
                </button>
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
};
