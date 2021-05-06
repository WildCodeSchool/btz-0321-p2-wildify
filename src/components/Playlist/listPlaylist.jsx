import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Defaultimg from '../../img/defaultPicture.png';
import authContext from '../../context/authContext';
import axios from 'axios';

function ListPlaylist({ handleClick, setIsLoading, playLists, playlistId, myPlaylist, setMyPlaylist }) {
  const { token } = useContext(authContext);

  // useEffect(async () => {
  //   await fetch(`https://bazify-backend.basile.vernouillet.dev/api/v1/playlists/${playlistId}`, {
  //     method: 'GET',
  //     headers: { Authorization: `Bearer ${token}` },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => setMyPlaylist(res))
  //     .catch((err) => console.log(err));
  //   setIsLoading(false);
  //   console.log(myPlaylist);
  // }, [playlistId]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const [resPlaylist] = await Promise.all([
  //       axios.get(`https://bazify-backend.basile.vernouillet.dev/api/v1/playlists/${playlistId}`, { headers: { Authorization: `Bearer ${token}` } }),
  //     ]);
  //     console.log(resPlaylist.data);
  //     setMyPlaylist(resPlaylist.data);
  //     setIsLoading(false);
  //   };
  //   getData();
  // }, []);

  return (
    <div className="w-full h-full  p-4 900:p-6">
      <h1 className="text-white font-scada text-3xl font-bold">WizicPlaylist</h1>
      {playLists.map((playlist, key) => (
        <button
          onClick={handleClick}
          value={playlist.id}
          key={key}
          type="button"
          className="rounded-3xl w-full flex 900:mt-5 mt-4 items-center p-2 bg-black bg-opacity-20 shadow-searchbar focus:outline-none cursor-pointer hover:border-mainColor hover:text-mainColor transform hover:scale-105">
          <div
            className="pointer-events-none w-12 h-12 border-2 border-green-300 rounded-fullist rounded-3xl"
            style={{
              backgroundImage: `url(${playlist.picture === null ? Defaultimg : playlist.picture})`,
              backgroundSize: `cover`,
              backgroundRepeat: `no-repeat`,
              backgroundPosition: `center`,
            }}></div>
          <div className="pointer-events-none flex-col ml-3 text-left">
            <h3 className="pointer-events-none text-white font-scada font-medium ">{playlist.title}</h3>
            <p className="pointer-events-none text-white font-cuprum text-xs font-thin">{playlist.description}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

export default ListPlaylist;

ListPlaylist.propTypes = {
  handleClick: PropTypes.func.isRequired,
  playLists: PropTypes.array.isRequired,
};
