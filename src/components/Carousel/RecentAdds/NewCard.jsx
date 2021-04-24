import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ items }) {
  return (
    <div className="flex flex-row">
      {items.map((item, index) => (
        <div
          key={index}
          className="w-64 h-80 mx-3 rounded-2xl"
          style={{
            backgroundImage: `url(${item.album.picture})`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center`,
          }}></div>
      ))}
    </div>
  );
}

Card.propTypes = {
  items: PropTypes.array.isRequired,
};