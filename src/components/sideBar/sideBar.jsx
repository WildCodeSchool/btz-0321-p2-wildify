import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ReturnBtn from '../../img/PlayList/ReturnButton.svg';
import useWindowDimensions from '../../Hooks/useWindowDimension';
import Formbg from '../../img/BackGrounds/BgSideBarBG5.png';
import WCSlogo from '../../img/LogoWild.png';
import authContext from '../../context/authContext';
import axios from 'axios';
import Popup from './popup';
import Check from '../../img/Icons/Check.png';

function SideBar({ sideBarClass, handleSideBar, handleAdmin }) {
  const [imgUrl, setImgUrl] = useState();
  const { width } = useWindowDimensions();
  const { token } = useContext(authContext);
  const [selectFile, setSelectFile] = useState();
  const [uploadOk, setUploadOk] = useState(false);
  const [popup, setPopup] = useState(false);

  const changeFileHandler = (event) => {
    setSelectFile(event.target.files[0]);
    setUploadOk(true);
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', selectFile);
    await axios
      .post('https://bazify-backend.basile.vernouillet.dev/api/v1/songs', formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        fetch(`https://bazify-backend.basile.vernouillet.dev/api/v1/albums/${res.data.albumId}`, {
          method: 'PUT',
          headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ picture: imgUrl }),
        }).then((res) => res, setPopup(true));
      });
  };

  return (
    <div className={sideBarClass}>
      {popup && (
        <div className="absolute bottom-24 h-screen w-screen 900:w-full 900:h-full z-50 flex items-end align-middle justify-center">
          <Popup />
        </div>
      )}
      <div
        className="flex flex-col justify-between w-full h-full py-2 px-6 900:px-8"
        style={{
          backgroundImage: `url(${Formbg})`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `top`,
        }}>
        <div className="flex flex-col">
          <div className="mt-5 w-full flex flex-row-reverse">
            <div className="mt-2 flex items-start">
              {width < 768 ? (
                <button className="focus:outline-none" onClick={handleSideBar}>
                  <img src={ReturnBtn} alt="" />
                </button>
              ) : (
                ''
              )}
            </div>
            <form className="w-full flex  flex-col">
              <h1 className="mt-4 mr-10 font-scada text-white text-4xl 900:text-3xl 900:mt-0">Share your Favorits songs with us</h1>
              <h1 className="mt-8  font-scada text-white text-2xl 900:text-xl">Upload Music</h1>
              <label
                className="mt-3 flex text-ls items-center hover:text-mainColor hover:shadow-input focus:outline-none p-4 900:p-2  900:px-4 text-white bg-bgPlaybar rounded-lg shadow-input2"
                htmlFor="file">
                <div className="w-full items-center flex justify-between">
                  <div className="font-cuprum flex items-center">Upload Your music files</div>
                  {uploadOk && <img className="w-6 h-6" src={Check} alt="Check"></img>}
                </div>
              </label>
              <input
                style={{
                  width: `0.1px`,
                  height: `0.1px`,
                  opacity: 0,
                  overflow: `hidden`,
                  position: `absolute`,
                  zIndex: `-1`,
                }}
                type="file"
                id="file"
                name="file"
                accept=".mp3"
                multiple
                onChange={changeFileHandler}
              />
              <h1 className="text-white text-2xl font-scada mt-8 900:text-xl">Import the album image</h1>
              <input
                className="mt-3 focus:outline-none p-3  text-white font-cuprum bg-bgPlaybar rounded-xl shadow-input"
                type="text"
                onChange={(e) => setImgUrl(e.target.value)}
                placeholder="Url Album Image...."
              />
              <button
                className="bg-bgPlaybar shadow-input2 focus:outline-none w-6/12 mt-5 rounded-lg text-sm text-white py-2 p-4 900:p-2  font-cuprum hover:text-mainColor hover:shadow-input"
                onClick={handleSubmission}>
                Upload Music
              </button>
            </form>
          </div>
        </div>
        <div className=" flex w-full justify-between items-end ">
          <div className="h-16 900:h-14">
            <h2 className="font-scada font-bold text-white text-xl 900:text-sm">Made by Happy Wilders</h2>
            <a className="font-cuprum text-white text-sm" href="https://www.wildcodeschool.com/fr-FR">
              @WildCodeSchool
            </a>
            <button className="opacity-0" onClick={handleAdmin}>
              ADMIN PANNEL
            </button>
          </div>
          <img className="w-16 h-16 900:w-14 900:h-14" src={WCSlogo} alt="LogoWild" />
        </div>
      </div>
    </div>
  );
}

SideBar.propTypes = {
  sideBarClass: PropTypes.string.isRequired,
  albums: PropTypes.array.isRequired,
  handleSideBar: PropTypes.func.isRequired,
  handleAdmin: PropTypes.func.isRequired,
};

export default SideBar;
