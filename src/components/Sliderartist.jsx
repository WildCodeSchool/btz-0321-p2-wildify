import React, { useState } from 'react';
import './sliderartist.css';

function Slideralbumcover() {
  const [index, setIndex] = useState(0);

  const [songs, setSongs] = useState([]);

  fetch('https://bazify-backend.basile.vernouillet.dev/api/v1/songs')
    .then((res) => res.json())
    .then((result) => setSongs(result));

  return (
    <div className="">
      <button onClick={() => setIndex(index == 0 ? songs.length - 1 : index - 1)}>Previous</button>
      <button onClick={() => setIndex(index == songs.length - 1 ? 0 : index + 1)}>Next</button>

      {songs.length ? (
        <div className="">
          <img src={songs[index].album.picture} alt="" />
          <div>{songs[index].title}</div>
          <div>{songs[index].album.title}</div>
          <div>{songs[index].artist.name}</div>
        </div>
      ) : (
        'loading'
      )}
    </div>
  );
}

export default Slideralbumcover;

const API = [
  {
    id: '98b2c41d-6b12-4f9a-a0aa-dd155608ea2a',
    title: '3095 pt2',
    duration: '3:16',
    s3_link: 'https://bazify.s3.amazonaws.com/Alpha-Wann/Dondada-mixtape/3095-pt2.mp3',
    artist: {
      name: 'Alpha Wann',
      picture: null,
    },
    album: {
      title: 'Dondada mixtape',
      picture: 'https://pbs.twimg.com/media/EpeX7DnWwAI_a8v.jpg',
    },
  },
  {
    id: '6e88d212-8d4f-4279-8b42-917c7df42465',
    title: 'aaa',
    duration: '2:44',
    s3_link: 'https://bazify.s3.eu-west-3.amazonaws.com/Alpha-Wann/Dondada-mixtape/aaa.mp3',
    artist: {
      name: 'Alpha Wann',
      picture: null,
    },
    album: {
      title: 'Dondada mixtape',
      picture: 'https://pbs.twimg.com/media/EpeX7DnWwAI_a8v.jpg',
    },
  },
  {
    id: '98e360e1-9ce7-4c6d-80f8-bc5d267cc083',
    title: 'apdl',
    duration: '2:42',
    s3_link: 'https://bazify.s3.eu-west-3.amazonaws.com/Alpha-Wann/Dondada-mixtape/apdl.mp3',
    artist: {
      name: 'Alpha Wann',
      picture: null,
    },
    album: {
      title: 'Dondada mixtape',
      picture: 'https://pbs.twimg.com/media/EpeX7DnWwAI_a8v.jpg',
    },
  },
];
