import React, { useContext, useState, useEffect } from 'react';
import AdminPlaylist from './AdminPlayList/AdminPlaylist';
import AdminSidebar from './AdminSidebar/AdminSidebar';
import AdminSongs from './AdminSongs/AdminSongs';
import authContext from '../../context/authContext';
import PropTypes from 'prop-types';
import BackGround from '../../img/BackGrounds/PanelBG.webp';
import ReturnBtn from '../../img/PlayList/ReturnButton.svg';

export default function AdminPannel({ item, albums, hideAdmin, artists }) {
  const [isAdminSong, setIsAdminSong] = useState(true);
  const [isAdminPlayList, setIsAdminPlayList] = useState(false);
  const { token } = useContext(authContext);
  const [myPlayList, setMyPlayList] = useState();

  const playListFetch = () =>
    fetch('https://bazify-backend.basile.vernouillet.dev/api/v1/playlists', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((result) => {
        setMyPlayList(result);
      })
      .catch((error) => {
        error;
      });

  useEffect(async () => {
    await playListFetch();
  }, []);

  const showAdminPlayList = () => {
    setIsAdminSong(false);
    setIsAdminPlayList(true);
  };

  const showAdminSongs = () => {
    setIsAdminSong(true);
    setIsAdminPlayList(false);
  };

  return (
    <div
      className="w-screen h-screen px-3 z-50 fixed  overflow-y-auto"
      style={{
        backgroundImage: `url(${BackGround})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `top`,
      }}>
      <div className="pb-2 pt-6  px-4">
        <div className="w-full text-6xl  flex flex-col">
          <div className="flex justify-between">
            <h1 className=" rounded-xl font-sacda text-6xl font-bold text-white">ADMIN PANNEL</h1>
            <button onClick={hideAdmin} className="flex w-10 mr-24 focus:outline-none text-white text-lg  whitespace-nowrap ">
              Back to WIZIC <img className="w-6 h-6 ml-2" src={ReturnBtn} alt="ReturnButton" />
            </button>
          </div>
          <p className="mt-5 text-5xl text-white">Take control on what you ear !</p>
        </div>
        <AdminSidebar showAdminSongs={showAdminSongs} showAdminPlayList={showAdminPlayList} />
      </div>

      <div className=" mt-2 w-full flex flex-col h-full">
        {isAdminSong && <AdminSongs artists={artists} albums={albums} myPlayList={myPlayList} item={item} />}
        {isAdminPlayList && <AdminPlaylist playListFetch={playListFetch} myPlayList={myPlayList} item={item} />}
      </div>
    </div>
  );
}

AdminPannel.propTypes = {
  item: PropTypes.array.isRequired,
  albums: PropTypes.array.isRequired,
  hideAdmin: PropTypes.func.isRequired,
  artists: PropTypes.array.isRequired,
};
