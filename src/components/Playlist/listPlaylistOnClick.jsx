import React from 'react';
import PropTypes from 'prop-types';

function ListPlaylistOnClick({ item, setIsChange, setCurrentTrack }) {
  return (
    <div className="p-6 900:p-10 ">
      <div className="flex justify-between items-center">
        <h1 className="text-white font-scada text-3xl font-bold mb-2">PlaylistName</h1>
        <button onClick={setIsChange} className="h-3 w-3  focus:outline-none transform hover:scale-110">
          <img src="src/img/PlayList/ReturnButton.svg" alt="ReturnButton" />
        </button>
      </div>
      {item.map((music, key) => (
        <button key={key} onClick={() => setCurrentTrack(key)} type="button" className="bg p-1 w-full focus:outline-none">
          <div className="flex flex-wrap items-center text-white mt-4 border-b border-gra border-white pb-1 mb-2 hover:border-mainColor hover:text-mainColor transform hover:scale-105">
            <img src={music.album.picture} alt="albumPicture" className="h-10 w-10 mr-2 rounded-full " />
            <div className=" font-scada text-xs font-bold mr-2 900:text-base">{music.title} -</div>
            <div className=" font-scada text-xs ">{music.artist.name}</div>
          </div>
        </button>
      ))}
    </div>
  );
}

export default ListPlaylistOnClick;

ListPlaylistOnClick.propTypes = {
  item: PropTypes.array.isRequired,
  setIsChange: PropTypes.func.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
};
