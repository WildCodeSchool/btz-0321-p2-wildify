import React from 'react';
import PropTypes from 'prop-types';
import Backward from '../../../img/PlayList/ReturnButton.svg';

function AlbumTrackList({ handleAlbumClick, item, albumChoice, setSelectedSong }) {
  const handleClick = (e) => {
    const mySong = item.filter((song) => song.title.includes(e.target.value));
    setSelectedSong(mySong);
  };
  return (
    <div className="flex flex-row-reverse h-full w-full p-4 900:px-8">
      <button className="focus:outline-none flex justify-start ml-4 mr-2 900:ml-8" onClick={handleAlbumClick}>
        <img src={Backward} alt="BackwardArrow" />
      </button>
      <ul className=" flex flex-col w-full items-start h-full">
        {item
          .filter((song) => song.album.title.includes(albumChoice))
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

export default AlbumTrackList;

AlbumTrackList.propTypes = {
  handleAlbumClick: PropTypes.func.isRequired,
  item: PropTypes.array.isRequired,
  albumChoice: PropTypes.string.isRequired,
  setSelectedSong: PropTypes.func.isRequired,
};
