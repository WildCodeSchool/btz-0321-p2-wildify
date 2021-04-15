import React, { useState } from 'react';
import RecentAdds from './RecentAdds/RecentAdds';
import PropTypes from 'prop-types';

export default function Carousel({ item }) {
  const [count, setCount] = useState(0);

  return (
    <div className="grid grid-cols-mobileCarousel grid-rows-mobileCarousel 900:grid-cols-desktopCarousel 900:grid-rows-desktopCarousel w-full h-full">
      <div className="col-start-1 col-end-2 row-start-1 row-end-2">
        <p className="text-white px-2">Recent adds</p>
      </div>

      <div className="col-start-1 900:col-start-2 col-end-2 900:col-end-3 row-start-2 900:row-start-1 row-end-3 900:row-end-2 flex flex-row justify-around items-start text-white">
        <button>Recent adds</button>
        <button>Artists</button>
        <button>Album</button>
        <button>TrackList</button>
      </div>

      <RecentAdds count={count} setCount={setCount} item={item} />
    </div>
  );
}

Carousel.propTypes = {
  item: PropTypes.array.isRequired,
};
