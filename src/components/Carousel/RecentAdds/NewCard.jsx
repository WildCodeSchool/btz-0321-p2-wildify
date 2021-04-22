import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.album.picture} alt="" />
        </div>
      ))}
    </div>
  );
}

Card.propTypes = {
  items: PropTypes.array.isRequired,
};
