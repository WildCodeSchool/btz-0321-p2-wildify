import React from 'react';
import WorkingPlaylist from '../../img/PlayList/WorkingPlaylist.svg';
import SportPlaylist from '../../img/PlayList/SportPlaylist.svg';
import ChillPlaylist from '../../img/PlayList/ChiilPlaylist.svg';
import PartyPlaylist from '../../img/PlayList/PartyAndFun.svg';
import OldSchoolPlaylist from '../../img/PlayList/OldSchool.svg';
import GamingPlaylist from '../../img/PlayList/Gaming.svg';
import PropTypes from 'prop-types';

function ListPlaylist({ setIsChange }) {
  const WizicPlaylist = [
    { title: 'Work and Code', desc: 'Relaxing and chill songs fot concentration', img: WorkingPlaylist, id: 1 },
    { title: 'Relax and Chill', desc: 'Be chill, be calm, be Cool, be Wizic', img: SportPlaylist, id: 2 },
    { title: 'Sport Motivation', desc: 'Listen Good music for help you to run !', img: ChillPlaylist, id: 3 },
    { title: 'Party and fun', desc: 'Let’s get the best sound for a party with your friends', img: PartyPlaylist, id: 4 },
    { title: 'Old School', desc: 'Find the best old School Music', img: OldSchoolPlaylist, id: 5 },
    { title: 'Gaming', desc: 'Check ours gamer’s selection', img: GamingPlaylist, id: 6 },
  ];

  return (
    <div className="w-full h-full  p-6">
      <h1 className="text-white font-scada text-3xl font-bold">WizicPlaylist</h1>
      {WizicPlaylist.map((playlist, key) => (
        <button
          onClick={setIsChange}
          key={key}
          type="button"
          className="rounded-3xl w-full flex 900:mt-5 mt-3 items-center p-2 bg-black bg-opacity-20 shadow-searchbar focus:outline-none cursor-pointer hover:bg-opacity-50">
          <img src={playlist.img} alt="Playlist1" className="w-plist h-pl border-2 border-green-300 rounded-fullist rounded-3xl" />
          <div className="flex-col ml-3 text-left">
            <h3 className="text-white font-scada font-medium ">{playlist.title}</h3>
            <p className="text-white font-cuprum text-xs font-thin">{playlist.desc}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

export default ListPlaylist;

ListPlaylist.propTypes = {
  setIsChange: PropTypes.func.isRequired,
};
