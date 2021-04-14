import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="col-start-1 col-end-4 mt-4">
      <div className="navHeader">
        <div className="logo">Wizic</div>

        <div className="uploadLink">
          Upload<img src="src/img/Icons/HeadPhone.svg" alt=""></img>
        </div>
      </div>

      <div className="search">
        <input type="text" className="inputSearch" placeholder="Search..."></input>
      </div>
    </div>
  );
}

export default Header;
