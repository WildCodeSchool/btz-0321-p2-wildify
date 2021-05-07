import React from 'react';
import PropTypes from 'prop-types';

function Popup({ setPopup, getDatas }) {
  const handleClick = () => {
    setPopup(false);
    getDatas();
  };
  return (
    <div className="flex border border-mainColor shadow-playbar justify-between flex-col h-42  w-80 rounded-xl p-6 bg-bgPlaybar">
      <div>
        <h1 className="text-white font-scada text-xl font-bold">Your Music was Upload Succesfully !!! </h1>
        <h1 className="mt-2 text-white font-scada text-lg ">Thanks for your participation</h1>
      </div>
      <div className="flex flex-col justify-between">
        <h1 className="mt-2 text-white font-scada text-xs">Press Ok to reload the App and listen your Music</h1>
        <button
          onClick={handleClick}
          className="mt-2 focus:outline-none text-white bg-white bg-opacity-30 rounded-xl shadow-searchbar w-full py-2 hover:border-mainColor hover:text-mainColor">
          OK
        </button>
      </div>
    </div>
  );
}

export default Popup;

Popup.propTypes = {
  progress: PropTypes.number,
  getDatas: PropTypes.func.isRequired,
  setPopup: PropTypes.func.isRequired,
};
