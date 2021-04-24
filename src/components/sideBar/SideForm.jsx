import React from 'react';
import PropTypes from 'prop-types';

function SideForm({ sideBarClass }) {
  return (
    <div className={sideBarClass}>
      <div className="px-5 pt-4 pb-10 900:px-8 900:py-8">
        <h1 className="font-scada text-white font-bold text-4xl">Welcome on the Wizic App</h1>
        <h1 className="font-scada text-white text-lg mt-5">
          Contribute to Wizic by uploading some good tracks. Please login to acces the upload form.
        </h1>
        <form className="flex flex-col mt-5">
          <label className="font-cuprum text-white text-xl" htmlFor="Pseudo">
            Pseudo
          </label>
          <input className="px-3 h-12 text-white focus:outline-none border-none bg-bgPlaybar shadow-input rounded-xl mt-1" type="text"></input>
          <label className="font-cuprum text-white text-xl" htmlFor="Password">
            Password
          </label>
          <input className="px-3 h-12 text-white focus:outline-none border-none bg-bgPlaybar shadow-input rounded-xl mt-1" type="password"></input>
          <button
            className="bg-bgPlaybar shadow-input2 focus:outline-none w-4/12 mt-5 rounded-4xl text-sm text-white py-2 font-scada hover:text-mainColor hover:shadow-input"
            type="button">
            Connect
          </button>
        </form>
      </div>
      <div
        className="flex h-full w-full items-end justify-between px-5 900:px-8 py-2"
        style={{
          backgroundImage: `url(src/img/BackGrounds/BgSideBarBG2.png)`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `center`,
          backgroundOpacity: '0.2',
        }}>
        <div className="h-16">
          <h2 className="font-scada font-bold text-white text-xl">Made by Happy Wilders</h2>
          <a className="font-cuprum text-white text-sm" href="https://www.wildcodeschool.com/fr-FR">
            @WildCodeSchool
          </a>
        </div>
        <img className="w-16 h-16" src="src/img/LogoWild.png" alt="LogoWild" />
      </div>
    </div>
  );
}

SideForm.propTypes = {
  sideBarClass: PropTypes.string.isRequired,
};

export default SideForm;
