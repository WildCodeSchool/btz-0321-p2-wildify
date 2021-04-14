import React from 'react';

import { useEffect, useState } from 'react';

export default function Controls(props) {
  const { handlePause } = props;
  const { handlePlay } = props;
  const { handleBackWard } = props;
  const { handleForWard } = props;

  return (
    <div className="flex">
      <img className="px-1" onClick={handleBackWard} src="./src/img/backward.svg" alt="" />
      <img className="px-1" onClick={handlePlay} src="./src/img/play.svg" alt="" />
      <img className="px-1" onClick={handlePause} src="./src/img/pause.png" alt="" />
      <img className="px-1" onClick={handleForWard} src="./src/img/forward.svg" alt="" />
    </div>
  );
}
