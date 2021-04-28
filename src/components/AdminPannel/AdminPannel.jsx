import React, { useEffect, useState, useContext } from 'react';

export default function AdminPannel({ item, token, albums }) {
  const [selectFile, setSelectFile] = useState();
  const [albumPicture, setAbumPicture] = useState(albums[0].picture);
  console.log(item, token);
  const changeFileHandler = (event) => {
    setSelectFile(event.target.files[0]);
  };
  const handleChange = (e) => {
    setAbumPicture(albums[e.target.value].picture);
  };

  const deleteTrack = () => {
    fetch('https://bazify-backend.basile.vernouillet.dev/api/v1/songs/:id98b2c41d-6b12-4f9a-a0aa-dd155608ea2a', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => console.log(response.json()))
      .catch((error) => console.log(error));
  };

  const handleSubmission = () => {
    let formData = new FormData();
    formData.append('file', selectFile);
    fetch('https://bazify-backend.basile.vernouillet.dev/api/v1/songs', {
      headers: { Authorization: `Bearer ${token}` },
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

  return (
    <div className="w-full h-screen fixed flex flex-row align-middle justify-center items-center  bg-black z-50">
      <div className=" w-full h-full grid-cols-2 grid-rows-2 grid text-white font-scada">
        <div className="flex flex-col items-center align-middle justify-center">WIZIC ADMIN MEC</div>
        <div className="flex flex-col items-center align-middle justify-center"></div>
        <div className="flex flex-col items-center align-middle justify-center"></div>
        <div className="flex flex-col items-center align-middle justify-center">
          {/* tracklist gesture*/}

          <div>
            {' '}
            <label htmlFor="listselect">List Select : </label>
            <select name="listselect" id="trackselect" className="text-gray-900">
              <option value="tracklist">Track List</option>
              <option value="albumslist">Albums List</option>
              <option value="Artistslist">Artists List</option>
            </select>
          </div>
          <div>
            {' '}
            <label className="text-white text-lg h-11 font-cuprum mt-5" htmlFor="upload">
              Select Music :
            </label>
            <input
              className="w-full h-11 p-2  focus:outline-none text-white font-cuprum  "
              type="file"
              id="file"
              name="file"
              accept=".mp3"
              multiple
              onChange={changeFileHandler}
            />
          </div>

          <div className="w-10/12 border-white border-2 relative overflow-y-scroll">
            <ul className="px-2 h-full flex flex-col">
              {item.map((song, index) => {
                return (
                  <li className="py-1 border-white border-b-2" key={index}>
                    <button>{song.title}</button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-row align-middle justify-center items-center">
            <button className="mx-2 py-1 px-2 border-white border-2 my-3 text-xs" onClick={handleSubmission}>
              ADD
            </button>
            <button onClick={deleteTrack} className="mx-2 py-1 px-2 border-white border-2 my-3 text-xs">
              DELETE
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center align-middle justify-center">
          <div className="flex flox-col align-middle justify-center items-center">
            <label htmlFor="listselect">Album :</label>
            <select onChange={handleChange} name="listselect" id="trackselect" className="text-gray-900">
              {albums.map((album, index) => {
                return (
                  <option value={index} key={index}>
                    {album.title}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="w-10/12 border-white border-2 relative overflow-y-scroll">
            <ul className="px-2 w-full h-full flex flex-col">
              <img className="w-512 min-h-full" src={albumPicture} alt="" />
            </ul>
          </div>
          <div className="flex flex-row align-middle justify-center items-center">
            <button className="mx-2 py-1 px-2 border-white border-2 my-3 text-xs">ADD</button>
            <button className="mx-2 py-1 px-2 border-white border-2 my-3 text-xs">DELETE</button>
          </div>
        </div>
        <div className="flex flex-col items-center align-middle justify-center"></div>
      </div>
    </div>
  );
}
