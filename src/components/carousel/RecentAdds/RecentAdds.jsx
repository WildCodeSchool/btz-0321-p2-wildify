import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

function RecentAdds({ count, setCount, item, active }) {
  return (
    <div className="col-start-1 col-end-2 900:col-end-3 row-start-3 900:row-start-2 row-end-4 900:row-end-3 flex flex-row justify-around items-center">
      <button onClick={() => setCount(count === 0 ? item.length - 1 : count - 1)} className="border bg-white rounded-2xl">
        Prev
      </button>

      <Card picture={item[count].album.picture} active={active} />
      <Card picture={item[count === item.length - 1 ? 0 : count + 1].album.picture} active={active} />
      <Card picture={item[count === item.length - 2 ? 0 : count === item.length - 1 ? 1 : count + 2].album.picture} active={active} />
      <Card
        picture={item[count === item.length - 3 ? 0 : count === item.length - 2 ? 1 : count === item.length - 1 ? 2 : count + 3].album.picture}
        active={active}
      />

      <button onClick={() => setCount(count === item.length - 1 ? 0 : count + 1)} className="border bg-white rounded-2xl">
        Next
      </button>
    </div>
  );
}

export default RecentAdds;

RecentAdds.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
  item: PropTypes.array.isRequired,
  active: PropTypes.bool.isRequired,
};
