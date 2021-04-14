import React from 'react';
import PropTypes from 'prop-types';

function Slider({ songs, index }) {
  return (
    <div className="z-0" style={{ transform: `translateY(${-14 * index}rem)`, transition: `transform 0.5s ease-in-out` }}>
      {songs.length ? (
        songs.map((song, index) => (
          <div key={index} className="label h-56 w-56" style={{ backgroundImage: `url(${song.album.picture})`, backgroundSize: `14rem` }}>
            <div className="label-title pl-1">{song.title}</div>
            <div className="label-album pl-1">{song.album.title}</div>
            <div className="label-name pl-1">{song.artist.name}</div>
          </div>
        ))
      ) : (
        <div className="loading">loading</div>
      )}
    </div>
  );
}

export default Slider;

Slider.propTypes = {
  songs: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
};
