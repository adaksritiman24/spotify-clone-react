import React, { useState, useEffect, useRef} from 'react';
import ReactAudioPlayer from 'react-audio-player';

import { audio } from '../audio';
import "./MusicControl.css";
// import { audio } from '../audio';

export default function MusicControl(props) {
  let [currentSong, setCurrentSong] = useState(props.currentSong)
  let [playing, setPlaying] = useState(true);
  let [maximumDuration, setMaximumDuration] = useState(0);
  let [durationPlayed, setDurationPlayed] = useState(0);
  let audioPlayer = useRef(new Audio(props.currentSong.path));

  const changeSliderValue = ()=>{
    setDurationPlayed(audioPlayer.current.currentTime);
  }


  
  const playAudioTrack = ()=>{

    audioPlayer.current.play();
    
  }
  const pauseAudioTrack = ()=>{

    audioPlayer.current.pause();
  
  }

  const PlayNextSong = ()=>{
    let currentSongId=props.currentSong.id;
    let nextSongId=(currentSongId+1)%5
    console.log(nextSongId);
    
    props.setCurrentTrack(nextSongId);
    
  }

  useEffect(() => {
    setCurrentSong(props.currentSong);  
    audioPlayer.current.addEventListener("timeupdate",changeSliderValue);
    audioPlayer.current.onloadedmetadata = ()=>{
      console.log(audioPlayer.current.duration);
      setMaximumDuration(audioPlayer.current.duration);
    }
    

  }, [props.currentSong]);

  return (
    <div className='musiccontrol'>
      <div>
        <img src='imgs/thumbnail.jpg' alt= "not found"/>
        <span>{currentSong.name}</span>
      </div>
      <div>
        <div className='controls-btn'>
          <button><i class="fas fa-step-backward"></i></button>
          <button onClick={playAudioTrack}><i className="fas fa-play"></i></button>
          <button onClick={pauseAudioTrack}><i className="fas fa-pause"></i></button>
          <button onClick={PlayNextSong}><i className="fas fa-step-forward"></i></button>
        </div>
        <audio
          src={currentSong.path}
          autoPlay = "true"
          ref= {audioPlayer}
        ></audio>
        <div>
          <input type = "range" id="song-bar" min="0" max={maximumDuration} value={durationPlayed}></input>
        </div>
      </div>
      <div className='volume-div'>
        <span><i class="bi bi-volume-down-fill"></i> </span>
        <input type = "range" id="volume-range"></input>
      </div>

      
    </div>
  );
  
}
