import React from 'react';
import PropTypes from 'prop-types';

function Homepage1({ handleclick }) {
  return (
    <div
      className="flex flex-col w-screen h-screen justify-between p-6 900:px-8 900:pt-8 900:pb-2"
      style={{
        backgroundImage: `url(src/img/BackGrounds/Acceuil.png)`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `left`,
      }}>
      <div className="flex items-center justify-between ">
        <h1 className="font-scada text-white font-bold text-4xl">WIZIC</h1>
      </div>
      <div className="w-full 900:w-5/12 900:ml-24 ">
        <h2 className="font-scada text-white font-bold text-3xl 900:text-4xl">Welcome</h2>
        <h1 className="font-cuprum text-white font-bold text-6xl mt-8 900:text-7xl">LET’S LISTEN GOOD MUSIC TOGETHER</h1>
        <h3 className="font-scada text-white pr-40 text-xl 900:text-xl 900:pr-60 mt-8 ">Here you can listen and share your favorite music</h3>
        <button
          onClick={handleclick}
          className="bg-bginput shadow-input3 focus:outline-none w-5/12 900:w-4/12 mt-8 rounded-lg text-sm text-white py-1 font-scada hover:text-mainColor hover:shadow-input"
          type="button">
          Login
        </button>
      </div>
      <div className="flex w-full justify-between items-end ">
        <div className="h-16 900:h-14">
          <h2 className="font-scada font-bold text-white text-xl 900:text-sm">Made by Happy Wilders</h2>
          <a className="font-cuprum text-white text-sm" href="https://www.wildcodeschool.com/fr-FR">
            @WildCodeSchool
          </a>
        </div>
        <img className="w-16 h-16 900:w-14 900:h-14" src="src/img/LogoWild.png" alt="LogoWild" />
      </div>
    </div>
  );
}

export default Homepage1;

Homepage1.propTypes = {
  handleclick: PropTypes.bool.isRequired,
};
