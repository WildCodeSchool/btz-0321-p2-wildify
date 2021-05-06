import React from 'react';
import PropTypes from 'prop-types';

function Popup({ progress }) {
  const handleClick = () => {
    window.location.reload(false);
  };
  return (
    <div className="flex border-2 border-mainColor justify-between flex-col h-72  w-80 rounded-xl shadow-searchbar p-4 bg-bgPlaybar">
      <div>
        <h1 className="text-white font-scada text-2xl font-bold">Your Music was Upload Succesfully !!! </h1>
        <h1 className="mt-2 text-white font-scada text-xl font-bold">Thanks for your participation</h1>
        <h1 className="mt-2 text-white font-scada text-lg">Press Ok to reload the App and listen your Music</h1>
        <div style={{ width: `${progress}%` }} className=" h-4 mt-2 bg-mainColor text-center rounded-full"></div>
      </div>
      <div className="flex justify-between">
        {progress === 100 && (
          <button
            onClick={handleClick}
            className="focus:outline-none text-white bg-white bg-opacity-30 rounded-xl shadow-searchbar w-full py-2 hover:border-mainColor hover:text-mainColor">
            OK
          </button>
        )}
      </div>
    </div>
  );
}

export default Popup;

Popup.propTypes = {
  progress: PropTypes.number.isRequired,
};
