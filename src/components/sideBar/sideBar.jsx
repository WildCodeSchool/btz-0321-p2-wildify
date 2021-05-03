import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReturnBtn from '../../img/PlayList/ReturnButton.svg';
import useWindowDimensions from '../../Hooks/useWindowDimension';
import Formbg from '../../img/BackGrounds/BgSideBarBG5.png';
import WCSlogo from '../../img/LogoWild.png';

function SideBar({ sideBarClass, albums, handleSideBar, handleAdmin }) {
  const [imgUrl, setImgUrl] = useState();
  const [albumIndex, setAlbumindex] = useState();
  const { width } = useWindowDimensions();
  const [selectFile, setSelectFile] = useState();

  const changeFileHandler = (event) => {
    setSelectFile(event.target.files[0]);
  };

  const handleSubmission = () => {
    let formData = new FormData();
    formData.append('file', selectFile);
    fetch('https://bazify-backend.basile.vernouillet.dev/api/v1/songs', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        result;
      })
      .catch((error) => {
        error;
      });
  };

  const handlePictureSubmission = (e) => {
    e.preventDefault();
    fetch(`https://bazify-backend.basile.vernouillet.dev/api/v1/albums/${albums[albumIndex].id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ picture: imgUrl }),
    }).then((res) => res);
  };

  const handleChange = (e) => {
    setImgUrl(e.target.value);
  };

  const handlePictureChange = (e) => {
    setAlbumindex(e.target.value);
  };

  return (
    <div className={sideBarClass}>
      <div
        className="flex flex-col justify-between w-full h-full py-2 px-6 900:px-6"
        style={{
          backgroundImage: `url(${Formbg})`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `top`,
        }}>
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
            <h1 className="font-scada text-white text-2xl">1. Upload Music</h1>
            <label className="text-white text-lg font-cuprum mt-3" htmlFor="playlist">
              Select Playlist:
            </label>
            <select className="w-full h-10 bg-bgPlaybar shadow-input p-2 focus:outline-none text-white font-cuprum rounded-xl mt-1" id="">
              <option className="" value="1">
                Playlist 1
              </option>
              <option className="" value="2">
                Playlist 2
              </option>
              <option className="" value="3">
                Playlist 3
              </option>
              <option className="" value="4">
                Playlist 4
              </option>
              <option className="" value="5">
                Playlist 5
              </option>
            </select>

            <label className="text-white text-lg font-cuprum mt-5" htmlFor="upload">
              Select Music
            </label>
            <input
              className="w-full h-12 p-2  shadow-input2 focus:outline-none text-white font-cuprum rounded-xl customFiles "
              type="file"
              id="file"
              name="file"
              accept=".mp3"
              multiple
              onChange={changeFileHandler}
            />
            <button
              className="bg-bgPlaybar shadow-input2 focus:outline-none w-5/12 mt-5 rounded-xl text-sm text-white py-1 font-scada hover:text-mainColor hover:shadow-input"
              onClick={handleSubmission}>
              Upload Music
            </button>
          </form>
        </div>
        <form className="mb-28 900:mb-20 flex flex-col">
          <h1 className="font-scada text-white text-2xl">2. Upload image</h1>
          <div className=" w-full flex flex-col mt-3">
            <label className="w-full text-white text-lg font-cuprum mt-2" htmlFor="Picture">
              Select Album
            </label>
            <select
              className="w-full h-10 bg-bgPlaybar mt-1 shadow-input focus:outline-none text-white font-cuprum p-2 rounded-xl"
              onBlur={handlePictureChange}>
              {albums.map((album, key) => {
                return (
                  <option value={key} id={album.id} key={album.id}>
                    {album.title}
                  </option>
                );
              })}
            </select>
            <label className="w-full text-white text-lg font-cuprum mt-3" htmlFor="Picture">
              Album image Url :
            </label>
            <input
              onChange={handleChange}
              className="w-full h-10 bg-bgPlaybar shadow-input p-4 focus:outline-none text-white font-cuprum rounded-xl mt-1"
              type="text"
              name="Picture"></input>
            <button
              className="bg-bgPlaybar shadow-input2 focus:outline-none w-5/12 mt-5 rounded-xl text-sm text-white py-1 font-scada hover:text-mainColor hover:shadow-input"
              onClick={handlePictureSubmission}>
              Upload Image
            </button>
          </div>
        </form>
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
