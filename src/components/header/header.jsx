import React from 'react';
import useWindowDimensions from '../../Hooks/useWindowDimension';

import HeadPhone from '../../img/Icons/HeadPhone.svg';

function Header() {
  const { width } = useWindowDimensions();

  return (
    <div className="col-start-1 col-end-3 mt-4 900:col-end-4 flex flex-col">
      <div className="font-scada text-4xl text-white self-start">
        <h1>Wizic</h1>
      </div>
      {width < 900 && (
        <div className="flex flex-row justify-end font-scada text-xl text-white">
          Upload
          <img src={HeadPhone} alt="Logo" />
        </div>
      )}

      <div className="self-end">
        <input
          type="text"
          className="text-white font-cuprum w-512 h-8 px-3 py-1 bg-gray-800 rounded-4xl opacity-80 shadow-lg"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

export default Header;
