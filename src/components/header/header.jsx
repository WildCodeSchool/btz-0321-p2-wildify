import React from 'react';
import './header.css';
import HeadPhone from '../../img/Icons/HeadPhone.svg';

function Header() {
  return (
    <div className="col-start-1 col-end-3 mt-4 md:col-end-4">
      <div className="navHeader">
        <div className="logo">Wizic</div>

        <div className="uploadLink">
          Upload
          <img src={HeadPhone} alt="Logo" />
        </div>
      </div>

      <div className="search">
        <input type="text" className="inputSearch" placeholder="Search..." />
      </div>
    </div>
  );
}

export default Header;
