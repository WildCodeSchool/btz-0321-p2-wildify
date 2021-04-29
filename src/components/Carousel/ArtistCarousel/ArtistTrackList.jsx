import React from 'react';
import PropTypes from 'prop-types';

function ArtistTrackList({ item, artistChoice, setSelectedSong }) {
  const handleClick = (e) => {
    const mySong = item.filter((song) => song.title.includes(e.target.value));
    setSelectedSong(mySong);
  };
  return (
    <div className="flex flex-row-reverse h-full w-full p-4 900:p-8">
      <ul className=" flex flex-col w-full items-start h-full">
        {item
          .filter((song) => song.artist.name.includes(artistChoice))
          .map((song, index) => {
            return (
              <button
                className="focus:outline-none  mb-4 text-white flex flex-col text-left pb-2 border-b w-full hover:border-mainColor hover:text-mainColor"
                key={index}
                value={song.title}
                onClick={handleClick}>
                <div className="flex items-center">
                  <div
                    className="flex h-12 w-12 mr-2 rounded-full"
                    style={{
                      backgroundImage: `url(${song.album.picture})`,
                      backgroundSize: `cover`,
                      backgroundRepeat: `no-repeat`,
                      backgroundPosition: `center`,
                    }}></div>
                  {song.title}
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
};
