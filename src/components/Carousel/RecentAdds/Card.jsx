import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlayerButton from '../../../img/Icons/PlayerButton.svg';
import Defaultimg from '../../../img/defaultPicture.png';

export default function Card({ itemReversed, setCurrentTrack, setMyPlaylist, myPlaylist }) {
  // const [myResult, setMyResult] = useState(localStorage.getItem('myPlaylist'));
  // const handleClick = (e) => {
  //   let result = myResult ? myResult : [];
  //   console.log(myResult);
  //   if (myResult === '') {
  //     result = [];
  //   } else {
  //     result = myResult;
  //   }
  //   result.push(JSON.parse(e.target.value));
  //   setMyResult(result);
  //   setMyPlaylist(myResult);
  //   localStorage.setItem('myPlaylist', JSON.stringify(myResult));
  // };

  const handleClick = (e) => {
    let result = localStorage.getItem('myPlaylist') ? JSON.parse(localStorage.getItem('myPlaylist')) : [];
    result.push(JSON.parse(e.target.value));
    setMyPlaylist(result);
    localStorage.setItem('myPlaylist', JSON.stringify(result));
  };

  return (
    <div className="h-full flex flex-row justify-end">
      {itemReversed.map((song, index) => (
        <div
          key={index}
          className="flex justify-end w-56 h-72 my-3 mx-3 rounded-2xl cursor-pointer border text-white flex-col shadow-card focus:outline-none hover:border hover:border-mainColor transform hover:scale-105"
          style={{
            backgroundImage: `url(${song.album.picture === null ? Defaultimg : song.album.picture})`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center`,
          }}>
          <div className="flex w-full bg-black bg-opacity-30 p-2 rounded-b-2xl">
            <div className=" w-full flex flex-col items-start  justify-start ">
              <p className="font-scada leading-5 text-white font-bold text-lg text-left">{song.title}</p>
              <p className="font-scada text-white text-sm text-left">{song.artist.name}</p>
            </div>
            <button onClick={() => setCurrentTrack(itemReversed.length - 1 - index)} className="flex focus:outline-none items-end m-1">
              <img src={PlayerButton} alt="" />
            </button>
            <button value={JSON.stringify(song)} onClick={handleClick} className="text-white">
              XX
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

Card.propTypes = {
  itemReversed: PropTypes.array.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
  setMyPlaylist: PropTypes.func.isRequired,
};
