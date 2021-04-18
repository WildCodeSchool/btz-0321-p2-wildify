import React from 'react';
import WorkingPlaylist from '../../img/PlayList/WorkingPlaylist.svg';
import SportPlaylist from '../../img/PlayList/SportPlaylist.svg';
import ChillPlaylist from '../../img/PlayList/ChiilPlaylist.svg';
import PartyPlaylist from '../../img/PlayList/PartyAndFun.svg';
import OldSchoolPlaylist from '../../img/PlayList/OldSchool.svg';
import GamingPlaylist from '../../img/PlayList/Gaming.svg';
import Playlist from './Playlist';

function ListPlaylist() {
  const WizicPlaylist = [
    { title: 'Work and Code', desc: 'Relaxing and chill songs fot concentration', img: WorkingPlaylist, id: 1 },
    { title: 'Relax and Chill', desc: 'Be chill, be calm, be Cool, be Wizic', img: SportPlaylist, id: 2 },
    { title: 'Sport Motivation', desc: 'Listen Good music for help you to run !', img: ChillPlaylist, id: 3 },
    { title: 'Party and fun', desc: 'Let’s get the best sound for a party with your friends', img: PartyPlaylist, id: 4 },
    { title: 'Old School', desc: 'Find the best old School Music', img: OldSchoolPlaylist, id: 5 },
    { title: 'Gaming', desc: 'Check ours gamer’s selection', img: GamingPlaylist, id: 6 },
  ];

  const wizicPlaylistListener = WizicPlaylist.map((playlist, key) => (
    <Playlist key={key} title={playlist.title} description={playlist.desc} img={playlist.img} />
  ));

  return (
    <div className="w-full h-full  p-6">
      <h1 className="text-white font-scada text-3xl font-bold">WizicPlaylist</h1>
      {wizicPlaylistListener}
    </div>
  );
}

export default ListPlaylist;
