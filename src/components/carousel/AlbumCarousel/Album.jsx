import React from 'react';
import AlbumCard from './AlbumCard';
import PropTypes from 'prop-types';

function Album({ count, setCount, albums }) {
  return (
    <div className="col-start-1 col-end-2 900:col-end-3 row-start-3 900:row-start-2 row-end-4 900:row-end-3 flex flex-row justify-around items-center">
      <button onClick={() => setCount(count === 0 ? albums.length - 1 : (count -= 1))} className="border bg-white rounded-2xl">
        Prev
      </button>

      <AlbumCard picture={albums[count].picture} count={count} albums={albums} />
      <AlbumCard
        picture={albums[count === albums.length - 1 ? 0 : count + 1].picture}
        count={count === albums.length - 1 ? 0 : count + 1}
        albums={albums}
      />
      <AlbumCard
        picture={albums[count === albums.length - 2 ? 0 : count === albums.length - 1 ? 1 : count + 2].picture}
        count={count === albums.length - 2 ? 0 : count === albums.length - 1 ? 1 : count + 2}
        albums={albums}
      />
      <AlbumCard
        picture={albums[count === albums.length - 3 ? 0 : count === albums.length - 2 ? 1 : count === albums.length - 1 ? 2 : count + 3].picture}
        count={count === albums.length - 3 ? 0 : count === albums.length - 2 ? 1 : count === albums.length - 1 ? 2 : count + 3}
        albums={albums}
      />

      <button onClick={() => setCount(count === 6 ? 0 : (count += 1))} className="border bg-white rounded-2xl">
        Next
      </button>
    </div>
  );
}

export default Album;

Album.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
  albums: PropTypes.array.isRequired,
};
