import React, { useState, useEffect, useContext } from 'react';
import ListPlaylist from './listPlaylist';
import ListPlaylistOnClick from './listPlaylistOnClick';
import PropTypes from 'prop-types';
import axios from 'axios';
import authContext from '../../context/authContext';

function PlaylistSwitch({ setCurrentTrack, playLists, setSelectedSong, setAddPlaylist }) {
  const { token } = useContext(authContext);
  const [myPlaylist, setMyPlaylist] = useState();
  const [ischange, setIsChange] = useState(true);
  const [playlistChoice, setPlaylistChoice] = useState('');
  const [playlistId, setPlaylistId] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const [resPlaylist] = await Promise.all([
        axios.get(`https://bazify-backend.basile.vernouillet.dev/api/v1/playlists/${JSON.parse(playlistId).id}`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      setMyPlaylist(resPlaylist.data);
      setIsLoading(false);
    };
    getData();
  }, [playlistId]);

  const handleClick = (e) => {
    setIsChange(false);
    setPlaylistChoice(JSON.parse(e.target.value).title);
    console.log(playlistChoice);
    setPlaylistId(e.target.value);
    console.log(e.target.value);
  };

  const Return = () => {
    setIsChange(true);
  };

  return (
    <div>
      <div>
        {ischange ? (
          <ListPlaylist
            myPlaylist={myPlaylist}
            setMyPlaylist={setMyPlaylist}
            playlistId={playlistId}
            playLists={playLists}
            handleClick={handleClick}
            setIsLoading={setIsLoading}
          />
        ) : (
          <ListPlaylistOnClick
            playlistChoice={playlistChoice}
            setAddPlaylist={setAddPlaylist}
            setSelectedSong={setSelectedSong}
            isLoading={isLoading}
            myPlaylist={myPlaylist}
            playlistId={playlistId}
            playLists={playLists}
            playlistChoice={playlistChoice}
            Return={Return}
            setCurrentTrack={setCurrentTrack}
          />
        )}
      </div>
    </div>
  );
}

export default PlaylistSwitch;

PlaylistSwitch.propTypes = {
  playLists: PropTypes.array.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
  setSelectedSong: PropTypes.func.isRequired,
  setAddPlaylist: PropTypes.func.isRequired,
};
