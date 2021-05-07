import React, { useContext, useState } from 'react';
import AdminPlayer from '../AdminPlayer/AdminPlayer';
import UpdateSongs from './UpdateSongs/UpdateSongs';
import UploadSongs from './UploadSongs/UploadSongs';
import authContext from '../../../context/authContext';
import PropTypes from 'prop-types';

export default function AdminSongs({ item, albums, myPlayList, artists }) {
  const { token } = useContext(authContext);
  const [imgUrl, setImgUrl] = useState();
  const [artistId, setArtistId] = useState();
  const handlePictureSubmission = (e) => {
    e.preventDefault();
    fetch(`https://bazify-backend.basile.vernouillet.dev/api/v1/artists/${artistId}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ picture: imgUrl }),
    })
      .then((res) => res)
      .catch((err) => err);
  };

  return (
    <div className="flex text-xs text-white">
      <div className="flex">
        <div className="flex  mx-4">
          <UploadSongs albums={albums} myPlayList={myPlayList} />
        </div>
        <div className="flex h-full mx-4">
          <UpdateSongs item={item} />
        </div>
        <div className="flex flex-col">
          <div className="bg-white p-3 bg-opacity-10 flex-col shadow-searchbar rounded-lg flex  w-96 mx-4">
            <h1 className="text-white font-scada text-2xl font-bold">Upload ArtistImg</h1>
            <h2 className="mt-2 text-white font-scada text-lg">Select Artist</h2>
            <select
              onChange={(e) => setArtistId(e.target.value)}
              className=" px-3 py-2 bg-white bg-opacity-10 rounded-lg shadow-input2"
              name=""
              id="">
              {artists.map((artist, index) => {
                return (
                  <option key={index} value={artist.id}>
                    {artist.name}
                  </option>
                );
              })}
            </select>
            <h2 className="mt-3 text-white font-scada text-lg">Picture Url</h2>
            <input
              onChange={(e) => setImgUrl(e.target.value)}
              className=" px-3 py-2 bg-white bg-opacity-10 rounded-lg shadow-input2"
              placeholder="Artist picture URL"
              type="text"
            />
            <button
              className=" mt-5 h-8  md:font-scada text-white rounded-xl  bg-white bg-opacity-20  shadow-searchbar  focus:outline-none  hover:border-mainColor"
              onClick={handlePictureSubmission}>
              Upload
            </button>
          </div>
          <div className="bg-white p-5 mt-2 bg-opacity-10 flex-col shadow-searchbar rounded-lg flex  w-96 mx-4">
            <AdminPlayer item={item} />
          </div>
        </div>
      </div>
    </div>
  );
}

AdminSongs.propTypes = {
  item: PropTypes.array.isRequired,
  albums: PropTypes.array.isRequired,
  artists: PropTypes.array.isRequired,
  myPlayList: PropTypes.array,
};
