import React from 'react';
import PropTypes from 'prop-types';

function SideForm({ sideBarClass }) {
  return (
    <div className={sideBarClass}>
      <div
        className="h-full w-full flex flex-col"
        style={{
          backgroundImage: `url(src/img/BackGrounds/BgSideBarBG2.png)`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `center`,
        }}>
        <div className="px-8 pt-4 pb-2 900:px-8 900:py-6">
          <h1 className="font-scada text-white font-bold text-5xl 900:text-3xl">Welcome on the Wizic App</h1>
          <h1 className="font-scada text-white text-lg mt-5 900:text-sm">
            Contribute to Wizic by uploading some good tracks. Please login to acces the upload form.
          </h1>
          <form className="flex flex-col mt-5">
            <label className="font-cuprum text-white text-xl" htmlFor="Pseudo">
              Pseudo
            </label>
            <input className="px-3 h-12 text-white focus:outline-none border-none bg-bgPlaybar shadow-input rounded-xl mt-1" type="text"></input>
            <label className="font-cuprum text-white text-xl mt-5" htmlFor="Password">
              Password
            </label>
            <input className="px-3 h-12 text-white focus:outline-none border-none bg-bgPlaybar shadow-input rounded-xl mt-1" type="password"></input>
            <button
              className="bg-bgPlaybar shadow-input2 focus:outline-none w-5/12 mt-5 rounded-4xl text-sm text-white py-2 font-scada hover:text-mainColor hover:shadow-input"
              type="button">
              Connect
            </button>
          </form>
        </div>
        <div className="flex h-full w-full justify-between items-end  px-8 900:px-8 py-2">
          <div className="h-16 900:h-14">
            <h2 className="font-scada font-bold text-white text-xl 900:text-sm">Made by Happy Wilders</h2>
            <a className="font-cuprum text-white text-sm" href="https://www.wildcodeschool.com/fr-FR">
              @WildCodeSchool
            </a>
          </div>
          <img className="w-16 h-16 900:w-14 900:h-14" src="src/img/LogoWild.png" alt="LogoWild" />
        </div>
      </div>
    </div>
  );
}

SideForm.propTypes = {
  sideBarClass: PropTypes.string.isRequired,
};

export default SideForm;
