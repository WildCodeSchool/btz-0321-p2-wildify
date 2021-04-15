import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

function RecentAdds({ count, setCount, albumCovers }) {
  return (
    <div className="col-start-1 col-end-2 900:col-end-3 row-start-3 900:row-start-2 row-end-4 900:row-end-3 flex flex-row justify-around items-center">
      <button onClick={() => setCount(count === 0 ? albumCovers.length - 1 : count - 1)} className="border bg-white rounded-2xl">
        Prev
      </button>

      <Card picture={albumCovers[count]} />
      <Card picture={albumCovers[count === albumCovers.length - 1 ? 0 : count + 1]} />
      <Card picture={albumCovers[count === albumCovers.length - 2 ? 0 : count === albumCovers.length - 1 ? 1 : count + 2]} />
      <Card
        picture={
          albumCovers[count === albumCovers.length - 3 ? 0 : count === albumCovers.length - 2 ? 1 : count === albumCovers.length - 1 ? 2 : count + 3]
        }
      />

      <button onClick={() => setCount(count === albumCovers.length - 1 ? 0 : count + 1)} className="border bg-white rounded-2xl">
        Next
      </button>
    </div>
  );
}

export default RecentAdds;

RecentAdds.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
  albumCovers: PropTypes.array.isRequired,
};
