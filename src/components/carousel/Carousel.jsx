import React, { useState } from 'react';
import Card from './Card/Card';

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
    'https://placedog.net/100/300',
  ]);

  return (
    <div className="grid grid-cols-mobileCarousel grid-rows-mobileCarousel 900:grid-cols-desktopCarousel 900:grid-rows-desktopCarousel w-full h-full">
      <div className="col-start-1 col-end-2 row-start-1 row-end-2">
        <p className="text-white px-2">Recent adds</p>
      </div>

      <div className="col-start-1 900:col-start-2 col-end-2 900:col-end-3 row-start-2 900:row-start-1 row-end-3 900:row-end-2 flex flex-row justify-around items-start">
        <button>Recent adds</button>
        <button>Artists</button>
        <button>Album</button>
        <button>TrackList</button>
      </div>

      <div className="col-start-1 col-end-2 900:col-end-3 row-start-3 900:row-start-2 row-end-4 900:row-end-3 flex flex-row justify-around items-center">
        <button onClick={() => setCount(count === 0 ? albumCovers.length - 1 : count - 1)} className="border bg-white rounded-2xl">
          Prev
        </button>

        <Card picture={albumCovers[count]} />
        <Card picture={albumCovers[count === albumCovers.length - 1 ? 0 : count + 1]} />
        <Card picture={albumCovers[count === albumCovers.length - 2 ? 0 : count === albumCovers.length - 1 ? 1 : count + 2]} />
        <Card
          picture={
            albumCovers[
              count === albumCovers.length - 3 ? 0 : count === albumCovers.length - 2 ? 1 : count === albumCovers.length - 1 ? 2 : count + 3
            ]
          }
        />

        <button onClick={() => setCount(count === albumCovers.length - 1 ? 0 : count + 1)} className="border bg-white rounded-2xl">
          Next
        </button>
      </div>
    </div>
  );
}
