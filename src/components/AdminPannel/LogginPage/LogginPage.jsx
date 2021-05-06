import React from 'react';
import PropTypes from 'prop-types';

export default function LogginPannel({ handleLoggin }) {
  return (
    <div className="flex absolut">
      <div className="w-full max-w-lg">
        <div className="leading-loose">
          <form className="bg-white bg-opacity-25 rounded shadow-xl">
            <p className="text-white  text-center text-lg font-bold">LOGIN</p>
            <div className="">
              <label className="block text-sm text-white" htmlFor="email">
                Pseudo :
              </label>
              <input
                className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                type="email"
                id="email"
                placeholder="Entrez votre e-mail"
                aria-label="email"
                required></input>
            </div>
            <div className="mt-2">
              <label className="block  text-sm text-white" htmlFor="Pass">
                Password :
              </label>
              <input
                className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                type="password"
                id="password"
                placeholder="Tappez votre mot de passe"
                arial-label="password"
                required></input>
            </div>

            <div className="mt-4 items-center flex justify-between">
              <button
                onClick={handleLoggin}
                className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                type="submit">
                OK !
              </button>
              {/* <a className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400" href="#">
                Mot de passe oublié ?
              </a> */}
            </div>
            {/* <div className="text-center">
              <a className="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400">Signaler un probleme</a>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

LogginPannel.propTypes = {
  handleLoggin: PropTypes.func.isRequired,
};
