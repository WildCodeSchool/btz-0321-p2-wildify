import React from 'react';

function Nextbutton({ handleClick }) {
  return <button onClick={() => handleClick((count) => count + 1)}>Next</button>;
}

export default Nextbutton;
