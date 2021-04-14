import React from 'react';
import useWindowDimensions from '../../Hooks/useWindowDimension';

import HeadPhone from '../../img/Icons/HeadPhone.svg';

function Header() {
  const { width } = useWindowDimensions();

  return (
    <div className="col-start-1 col-end-3 mt-4 900:col-end-4 flex flex-col">
      <div className="font-scada font-bold text-4xl text-white self-start">
        <h1>Wizic</h1>
      </div>
      {width < 900 && (
        <div className="flex flex-row justify-end font-scada text-xl text-white">
          Upload
          <img src={HeadPhone} className="ml-2" alt="Logo" />
        </div>
      )}

      <div className="900:self-end mt-5 900:mt-0">
        <input
          type="text"
          className="text-white font-cuprum  md:w-512 w-80 h-10 px-3 py-2 bg-black bg-opacity-10 rounded-4xl border-none  shadow-searchbar"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

export default Header;
