import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import authContext from '../context/authContext';
import PropTypes from 'prop-types';
import Homebg from '../img/BackGrounds/Acceuil.png';
import GHicon from '../img/Icons/github.png';
import WCSlogo from '../img/LogoWild.png';

function Homepage({ location: { search } }) {
  const history = useHistory();

  const { token, setToken } = useContext(authContext);

  useEffect(() => {
    const splited =
      search &&
      search
        .split('?')[1]
        .split('&')
        .reduce((acc, cur) => {
          const [key, value] = cur.split('=');
          return { ...acc, [key]: value };
        }, {});
    setToken(splited.token);
  }, []);

  useEffect(() => {
    if (token) {
      history.push('/app');
    }
  }, [token]);

  return (
    <div
      className="overflow-y-auto flex flex-col w-screen h-screen justify-between py-5 px-8 900:px-8 900:pt-8 900:pb-2"
      style={{
        backgroundImage: `url(${Homebg})`,
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
        <h3 className="font-scada text-white  text-xl 900:text-xl 900:pr-60 mt-8 ">Here you can listen and share your favorite music</h3>
        <button
          className="flex items-center bg-bginput shadow-input2 focus:outline-none w-8/12 900:w-4/12 mt-5 rounded-lg text-sm text-white py-2 px-2 font-scada hover:text-mainColor hover:shadow-input"
          onClick={() => {
            window.open('https://bazify-backend.basile.vernouillet.dev/auth/github', '_self');
          }}>
          <img className="w-6 h-6 mr-3" src={GHicon} alt="Github" />
          Log with Github
        </button>
      </div>
      <div className="flex w-full justify-between items-end ">
        <div className="h-16 900:h-14">
          <h2 className="font-scada font-bold text-white text-xl 900:text-sm">Made by Happy Wilders</h2>
          <a className="font-cuprum text-white text-sm" href="https://www.wildcodeschool.com/fr-FR">
            @WildCodeSchool
          </a>
        </div>
        <img className="w-16 h-16 900:w-14 900:h-14" src={WCSlogo} alt="LogoWild" />
      </div>
    </div>
  );
}

export default Homepage;

Homepage.propTypes = {
  search: PropTypes.string,
  location: PropTypes.object.isRequired,
};
