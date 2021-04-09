import React from 'react';

function DisplayCount({ count }) {
  return (
    <p
      style={{
        textAlign: 'center',
      }}
    >
      {count}
    </p>
  );
}

export default DisplayCount;