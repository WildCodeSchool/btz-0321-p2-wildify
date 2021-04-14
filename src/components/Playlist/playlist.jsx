import React from 'react';
import './playlist.css';
import WorkingPlaylist from '../../img/Playlist/WorkingPlaylist.svg';
import SportPlaylist from '../../img/Playlist/SportPlaylist.svg';
import ChillPlaylist from '../../img/Playlist/chiilPlaylist.svg';
import PartyPlaylist from '../../img/Playlist/PartyAndFun.svg';
import OldSchoolPlaylist from '../../img/Playlist/OldSchool.svg';
import GamingPlaylist from '../../img/Playlist/Gaming.svg';

function Playlist() {
  return (
    <div className="wd-full h-full p-6">
      <h1 className="text-white font-scada text-3xl font-bold">WIZIC Playlists</h1>

      <div className=" rounded-3xl flex 900:mt-5 mt-3 items-center  p-2 bg-black bg-opacity-20 shadow-searchbar">
        <img src={WorkingPlaylist} alt="Playlist1" className="w-plist h-plist" />
        <div className="flex-col ml-3">
          <h3 className="text-white font-scada font-medium ">Working and Code</h3>
          <p className="text-white font-cuprum text-xs font-thin">Relaxing and chill songs fot concentration</p>
        </div>
      </div>
      <div className=" rounded-3xl flex 900:mt-5 mt-3 items-center p-2 bg-black bg-opacity-20 shadow-searchbar">
        <img src={SportPlaylist} alt="Playlist3" className="w-plist h-plist" />
        <div className="flex-col ml-3">
          <h3 className="text-white font-scada font-medium ">Relax and Chill</h3>
          <p className="text-white font-cuprum text-xs font-thin">Be chill, be calm, be Cool, be Wizic </p>
        </div>
      </div>
      <div className=" rounded-3xl flex 900:mt-5 mt-3 items-center p-2 bg-black bg-opacity-20 shadow-searchbar">
        <img src={ChillPlaylist} alt="Playlist3" className="w-plist h-plist" />
        <div className="flex-col ml-3">
          <h3 className="text-white font-scada font-medium ">Sport Motivation</h3>
          <p className="text-white font-cuprum text-xs font-thin">Listen Good music for help you to run !</p>
        </div>
      </div>
      <div className=" rounded-3xl flex 900:mt-5 mt-3 items-center  p-2 bg-black bg-opacity-20 shadow-searchbar">
        <img src={PartyPlaylist} alt="Playlist1" className="w-plist h-plist" />
        <div className="flex-col ml-3">
          <h3 className="text-white font-scada font-medium ">Party and fun </h3>
          <p className="text-white font-cuprum text-xs font-thin">Let’s get the best sound for a party with your friends</p>
        </div>
      </div>
      <div className=" rounded-3xl flex 900:mt-5 mt-3 items-center p-2 bg-black bg-opacity-20 shadow-searchbar">
        <img src={OldSchoolPlaylist} alt="Playlist3" className="w-plist h-plist" />
        <div className="flex-col ml-3">
          <h3 className="text-white font-scada font-medium ">Old School</h3>
          <p className="text-white font-cuprum text-xs font-thin">Find the best old School Music</p>
        </div>
      </div>
      <div className=" rounded-3xl flex 900:mt-5 mt-3 items-center p-2 bg-black bg-opacity-20 shadow-searchbar">
        <img src={GamingPlaylist} alt="Playlist3" className="w-plist h-plist" />
        <div className="flex-col ml-3">
          <h3 className="text-white font-scada font-medium ">Gaming</h3>
          <p className="text-white font-cuprum text-xs font-thin">Check ours gamer’s selection</p>
        </div>
      </div>
    </div>
  );
}

export default Playlist;
