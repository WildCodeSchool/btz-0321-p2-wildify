import React, { useContext, useState, useEffect } from 'react';
import AdminPlayer from '../AdminPlayer/AdminPlayer';
import UpdateSongs from './UpdateSongs/UpdateSongs';
import UploadSongs from './UploadSongs/UploadSongs';
import authContext from '../../../context/authContext';
import PropTypes from 'prop-types';

export default function AdminSongs({ item, albums, playList, artists }) {
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
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  console.log(artists);
  return (
    <div className="w-full h-full flex items-center justify-center align-middle text-xs   text-white">
      <div className="w-full h-full grid-rows-2 grid-cols-2 grid">
        <div className="flex justify-center align-middle items-center py-6 ">
          <UploadSongs albums={albums} playList={playList} />
        </div>
        <div className="flex justify-center align-middle items-center py-6 ">
          <UpdateSongs item={item} />
        </div>
        <div className="flex justify-center align-middle items-center py-6 ">
          <AdminPlayer item={item} />
        </div>
        <div className="flex justify-center align-middle items-center flex-col  py-6 ">
          <select
            onChange={(e) => setArtistId(e.target.value)}
            className="bg-black opacity-50 text-white w-72 rounded-xl h-8 py-2 px-4"
            name=""
            id="">
            {artists.map((artist) => {
              return <option value={artist.id}>{artist.name}</option>;
            })}
          </select>
          <input
            onChange={(e) => setImgUrl(e.target.value)}
            className="bg-black opacity-50 text-white w-72 rounded-xl my-2 h-6 py-2 px-4"
            placeholder="Album picture URL"
            type="text"
          />
          <button onClick={handlePictureSubmission}>SUBMIT ALBUM PICTURE</button>
          <div className="h-72 w-72"></div>
        </div>
      </div>
    </div>
  );
}

AdminSongs.propTypes = {
  item: PropTypes.array.isRequired,
  albums: PropTypes.array.isRequired,
  playList: PropTypes.array.isRequired,
};
