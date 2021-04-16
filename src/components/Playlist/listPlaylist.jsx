import React from 'react';
import WorkingPlaylist from '../../img/Playlist/WorkingPlaylist.svg';
import SportPlaylist from '../../img/Playlist/SportPlaylist.svg';
import ChillPlaylist from '../../img/Playlist/chiilPlaylist.svg';
import PartyPlaylist from '../../img/Playlist/PartyAndFun.svg';
import OldSchoolPlaylist from '../../img/Playlist/OldSchool.svg';
import GamingPlaylist from '../../img/Playlist/Gaming.svg';
import Playlist from './Playlist';

function ListPlaylist() {
  const img = {
    img1: WorkingPlaylist,
    img2: SportPlaylist,
    img3: ChillPlaylist,
    img4: PartyPlaylist,
    img5: OldSchoolPlaylist,
    img6: GamingPlaylist,
  };
  const title = {
    title1: 'Work and Code',
    title2: 'Relax and Chill',
    title3: 'Sport Motivation',
    title4: 'Party and fun',
    title5: 'Old School',
    title6: 'Gaming',
  };
  const description = {
    desc1: 'Relaxing and chill songs fot concentration',
    desc2: 'Be chill, be calm, be Cool, be Wizic',
    desc3: 'Listen Good music for help you to run !',
    desc4: 'Let’s get the best sound for a party with your friends',
    desc5: 'Find the best old School Music',
    desc6: 'Check ours gamer’s selection',
  };

  return (
    <div className="wd-full h-full p-6">
      <h1 className="text-white font-scada text-3xl font-bold">WizicPlaylist</h1>
      <Playlist img={img.img1} title={title.title1} description={description.desc1} />
      <Playlist img={img.img2} title={title.title2} description={description.desc2} />
      <Playlist img={img.img3} title={title.title3} description={description.desc3} />
      <Playlist img={img.img4} title={title.title4} description={description.desc4} />
      <Playlist img={img.img5} title={title.title5} description={description.desc5} />
      <Playlist img={img.img6} title={title.title6} description={description.desc6} />
    </div>
  );
}

export default ListPlaylist;
