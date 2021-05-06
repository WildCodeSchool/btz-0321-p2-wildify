import React from 'react';
import useWindowDimensions from '../../Hooks/useWindowDimension';
import PropTypes from 'prop-types';
import HeadPhone from '../../img/Icons/HeadPhone.svg';

function Header({ handleSideBar, setOnSearch }) {
  const { width } = useWindowDimensions();

  const handleChange = (e) => {
    setOnSearch(e.target.value.toLowerCase());
  };

  return (
    <div className="col-start-1 col-end-3 mt-4 900:col-end-4 flex flex-col">
      <div className="font-scada font-bold text-4xl text-white self-start">
        <h1>Wizic</h1>
      </div>
      {width < 900 && (
        <div className="flex flex-row justify-end font-scada text-xl text-white">
          <button onClick={handleSideBar} className="z-30 rel">
            Upload
          </button>
          <img src={HeadPhone} className="ml-2" alt="Logo" />
        </div>
      )}

      <div className="900:self-end mt-5 900:mt-0">
        <input
          type="text"
          className="focus:outline-none text-white font-cuprum  md:w-512 w-full h-10 px-5 py-2 bg-black bg-opacity-10 rounded-4xl border-none  shadow-searchbar"
          placeholder="Search..."
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
Header.propTypes = {
  handleSideBar: PropTypes.func.isRequired,
  setOnSearch: PropTypes.func.isRequired,
};

export default Header;
