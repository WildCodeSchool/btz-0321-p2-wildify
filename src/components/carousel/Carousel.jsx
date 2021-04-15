import React, { useState } from 'react';
import RecentAdds from './RecentAdds/RecentAdds';

export default function Carousel() {
  const [count, setCount] = useState(0);
  const [albumCovers] = useState([
    'https://placedog.net/300/200',
    'https://placedog.net/320/200',
    'https://placedog.net/400/200',
    'https://placedog.net/500/200',
    'https://placedog.net/400/300',
    'https://placedog.net/500/300',
    'https://placedog.net/300/300',
    'https://placedog.net/300/400',
  ]);

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

      <RecentAdds count={count} setCount={setCount} albumCovers={albumCovers} />
    </div>
  );
}
