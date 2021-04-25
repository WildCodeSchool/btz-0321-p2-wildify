import React from 'react';
import ArtistCard from './ArtistCard';
import PropTypes from 'prop-types';

function Artist({ count, setCount, artists }) {
  return (
    <div className="col-start-1 col-end-2 900:col-end-3 row-start-3 900:row-start-2 row-end-4 900:row-end-3 flex flex-row justify-around items-center">
      <button onClick={() => setCount(count === 0 ? artists.length - 1 : (count -= 1))} className="border bg-white rounded-2xl">
        Prev
      </button>

      <ArtistCard picture={artists[count].picture} />
      <ArtistCard picture={artists[count === artists.length - 1 ? 0 : count + 1].picture} />
      <ArtistCard picture={artists[count === artists.length - 2 ? 0 : count === artists.length - 1 ? 1 : count + 2].picture} />
      <ArtistCard
        picture={artists[count === artists.length - 3 ? 0 : count === artists.length - 2 ? 1 : count === artists.length - 1 ? 2 : count + 3].picture}
      />

      <button onClick={() => setCount(count === 6 - 1 ? 0 : (count += 1))} className="border bg-white rounded-2xl">
        Next
      </button>
    </div>
  );
}

export default Artist;

Artist.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
  artists: PropTypes.array.isRequired,
};
