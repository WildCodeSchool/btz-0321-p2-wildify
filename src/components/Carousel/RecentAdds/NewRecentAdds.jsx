import React from 'react';
import Card from './NewCard';
import PropTypes from 'prop-types';

function RecentAdds({ item }) {
  const itemReversed = [...item];
  itemReversed.reverse();

  return (
    <div className="col-start-1 col-end-2 900:col-end-3 row-start-3 900:row-start-2 row-end-4 900:row-end-3 flex flex-row overflow-x-auto">
      <Card items={itemReversed} />
    </div>
  );
}

export default RecentAdds;

RecentAdds.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
  item: PropTypes.array.isRequired,
};
