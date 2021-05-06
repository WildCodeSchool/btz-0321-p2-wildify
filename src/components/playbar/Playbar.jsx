import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Controls from './controls/controls';
import HiddenPlayer from '../HiddenPlayer/HiddenPlayer';
import Volume from '../../img/volume.svg';
import './playbar.css';
import Defaultimg from '../../img/defaultPicture.png';
import Wave from '../../img/wavegreen.gif';

export default function Playbar({
  title,
  album,
  artist,
  picture,
  item,
  audio,
  currentTrack,
  setCurrentTrack,
  setAudio,
  onListen,
  setOnListen,
  handleSong,
  setPicture,
  setTitle,
  setAlbum,
  setArtist,
  isPlaySwitch,
  setIsPlaySwitch,
  selectedSong,
  isAlbumTrackList,
  isArtistTrackList,
  isPlaylist,
  myPlaylist,
  isRecentAddsActive,
  setSelectedSong,
}) {
  const [sliderValue, setSliderValue] = useState(0);
  const [sliderPos, setSliderPos] = useState('100');
  const [duration, setDuration] = useState('00:00');
  const [currentTime, setCurrentTime] = useState('00:00');
  const audioRef = useRef(null);
  const [displayNone, setDisplayNone] = useState('none');

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (audioRef.current.currentTime > 0) {
        setSliderValue(audioRef.current.currentTime);
        setDuration(Math.floor(audioRef.current.duration));
        setCurrentTime(Math.floor(audioRef.current.currentTime));
      }
    }, 100);
    return function () {
      clearInterval(timer);
    };
  }, [sliderValue, audioRef]);

  useEffect(() => {
    setSelectedSong('');
    updateSong();
  }, [currentTrack]);

  const secondsToHms = (d) => {
    d = Number(d);
    let m = Math.floor((d % 3600) / 60);
    let s = Math.floor((d % 3600) % 60);
    return m + ':' + s;
  };

  const updateSong = () => {
    if (isPlaylist && !selectedSong) {
      setOnListen(myPlaylist[currentTrack].s3_link);
      setTitle(myPlaylist[currentTrack].title);
      setArtist(myPlaylist[currentTrack].artist.name);
      setAlbum(myPlaylist[currentTrack].album.title);
      setPicture(myPlaylist[currentTrack].album.picture);
    } else if (isAlbumTrackList || isArtistTrackList || selectedSong || (isRecentAddsActive && !isPlaylist)) {
      if (selectedSong) {
        setOnListen(selectedSong.s3_link);
        setTitle(selectedSong.title);
        setArtist(selectedSong.artist.name);
        setAlbum(selectedSong.album.title);
        setPicture(selectedSong.album.picture);
      }
    } else {
      setOnListen(item[currentTrack].s3_link);
      setTitle(item[currentTrack].title);
      setArtist(item[currentTrack].artist.name);
      setAlbum(item[currentTrack].album.title);
      setPicture(item[currentTrack].album.picture);
    }
    if (audioRef.current) {
      audioRef.current.load();
    }
    if (audio === true) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    updateSong();
  }, [selectedSong]);

  const volumeChange = (e) => {
    setSliderPos(e.target.value);
    audioRef.current.volume = sliderPos / 100;
  };

  const positionChange = (e) => {
    setSliderValue(e.target.value);
    audioRef.current.currentTime = e.target.value;
  };

  const handlePause = () => {
    audioRef.current.pause();
    setAudio(false);
    setIsPlaySwitch(true);
  };

  const handlePlay = () => {
    setAudio(true);
    setIsPlaySwitch(false);
    audioRef.current.play();
    setDisplayNone('flex');
  };

  const handleBackWard = () => {
    if (isPlaylist) {
      if (currentTrack === 0) {
        setCurrentTrack(myPlaylist.length - 1);
        updateSong();
      } else {
        setCurrentTrack(currentTrack - 1);
        updateSong();
      }
    } else if (currentTrack === item.length - 1) {
      setCurrentTrack(0);
      updateSong();
    } else {
      setCurrentTrack((currentTrack += 1));
      updateSong();
    }
  };

  const handleForWard = () => {
    if (isPlaylist) {
      if (currentTrack === myPlaylist.length - 1) {
        setCurrentTrack(0);
        updateSong();
      } else {
        setCurrentTrack((currentTrack += 1));
        updateSong();
      }
    } else if (currentTrack === item.length - 1) {
      setCurrentTrack(0);
      updateSong();
    } else {
      setCurrentTrack((currentTrack += 1));
      updateSong();
    }
  };

  return (
    <div className="w-pbar max-h-40 flex-row fixed bottom-1 left-3 z-40">
      <HiddenPlayer
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        item={item}
        handleSong={handleSong}
        onListen={onListen}
        setOnListen={setOnListen}
        updateSong={updateSong}
        audioRef={audioRef}
        handleForWard={handleForWard}
      />

      <div
        className="flex 
       bg-bgPlaybar  items-center h-20 rounded-4xl shadow-playbar overflow-hidden mb-1">
        <div className=" flex-row w-2/5 flex h-full items-center overflow-hidden ">
          <div
            className="w-16 h-16 ml-4 mr-4 rounded-full shadow-ImgPlaybar"
            style={{
              backgroundImage: `url(${picture === null ? Defaultimg : picture})`,
              backgroundSize: `cover`,
              backgroundRepeat: `no-repeat`,
              backgroundPosition: `center`,
            }}></div>
          <div className="flex-row w-6/12 flex justify-center overflow-hidden item-center align-middle ">
            <div className="flex w-full overflow-hidden ">
              <div className="text-white whitespace-nowrap text-lg   txt font-cuprum  ">
                {album} - {artist} - {title}&nbsp;
              </div>
              <div className="text-white whitespace-nowrap text-lg txt font-cuprum   ">
                {album} - {artist} -{title}&nbsp;
              </div>
            </div>
          </div>
          {audio ? <img className="h-12 w-14 m-auto" style={{ display: `${displayNone}` }} src={Wave} alt="" /> : ''}
        </div>
        <div className="w-8/12 flex align-middle item-center justify-center mr-3">
          <div className="w-4/5 mr-6 h-full flex align-middle item-center justify-center">
            <div className=" flex px-1 mx-2 mt-2 text-xs align-middle font-Cuprum text-white">{audio ? secondsToHms(currentTime) : '00:00'}</div>
            <div className="w-4/5">
              <div className="w-full">
                <div className="endTime"></div>
                <input
                  onChange={positionChange}
                  type="range"
                  min="0"
                  max={duration}
                  value={sliderValue}
                  className=" h-1.5 bg-white rounded slider"
                  id="myRange"></input>
                <div className="endTime"></div>
              </div>
            </div>
            <div className="text-white text-xs mt-2 font-Cuprum mx-2">{audio ? secondsToHms(duration - currentTime) : '00:00'}</div>
          </div>
          <Controls
            handlePlay={handlePlay}
            handlePause={handlePause}
            handleBackWard={handleBackWard}
            handleForWard={handleForWard}
            isPlaySwitch={isPlaySwitch}
          />
          <div className="ml-6 mr-3 flex-col align-middle w-5/12">
            <div className="flex h-full w-full align-middle justify-center items-center">
              <div className="h-full mr-2">
                <img className="w-full" src={Volume} alt="" />
              </div>
              <div className="h-full  w-full">
                <div className="endTime"></div>
                <input
                  onChange={volumeChange}
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  className="w-11/12 h-1.5 rounded slider"
                  id="myRange"></input>
                <div className="endTime"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Playbar.propTypes = {
  item: PropTypes.array.isRequired,
  setAudio: PropTypes.func.isRequired,
  onListen: PropTypes.string,
  setOnListen: PropTypes.func.isRequired,
  handleSong: PropTypes.func.isRequired,
  currentTrack: PropTypes.number.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
  audio: PropTypes.bool.isRequired,
  picture: PropTypes.string,
  artist: PropTypes.string,
  album: PropTypes.string,
  title: PropTypes.string,
  setTitle: PropTypes.func.isRequired,
  setArtist: PropTypes.func.isRequired,
  setAlbum: PropTypes.func.isRequired,
  setPicture: PropTypes.func.isRequired,
  isPlaySwitch: PropTypes.bool,
  setIsPlaySwitch: PropTypes.func,
  selectedSong: PropTypes.any,
  isAlbumTrackList: PropTypes.bool.isRequired,
  isArtistTrackList: PropTypes.bool.isRequired,
  isPlaylist: PropTypes.bool.isRequired,
  myPlaylist: PropTypes.array.isRequired,
  isRecentAddsActive: PropTypes.bool.isRequired,
  setSelectedSong: PropTypes.func.isRequired,
};
