import React, { useState, useEffect, useRef} from 'react';

import "./MusicControl.css";
// import { audio } from '../audio';

export default function MusicControl(props) {

  let [playing, setPlaying] = useState(false);
  let [maximumDuration, setMaximumDuration] = useState(0);
  let [durationPlayed, setDurationPlayed] = useState(0);
  let audioPlayer = useRef(new Audio(props.currentSong.path));
  const [audioVolume, setaudioVolume] = useState(0.6);
  let [songsRemaining, setSongsRemaining] = useState([0, 1, 2, 3, 4])
  const [shuffle, setShuffle] = useState(false);

  const changeSliderValue = ()=>{
    setDurationPlayed(parseInt(audioPlayer.current.currentTime));
  }


  
  const playPauseAudioTrack = ()=>{
    if(!playing){
      audioPlayer.current.play();
    }
    else{
      audioPlayer.current.pause();
    }
    setPlaying(!playing);
  
  }

  const changeAudioVolume = (e)=>{
    
    setaudioVolume(e.target.value/100);
    audioPlayer.current.volume = e.target.value/100;
  }

  const PlayNextSong = ()=>{
    let currentSongId=props.currentSong.id;
    let nextSongId = null

    if(shuffle){ // select a random item and delete it from the list
      let rIndex = parseInt(Math.random()*(songsRemaining.length-1));
      nextSongId = songsRemaining[rIndex];

      let newList = songsRemaining;
      newList.splice(rIndex,1);

      if(newList.length === 0){ //reinitialize once list is empty
        setSongsRemaining([0, 1, 2, 3, 4]);
      }  
      else{
        setSongsRemaining(newList);
      }
    }

    else{ // if shuffle is not true play next song in the list
      nextSongId=(currentSongId+1)%5
    }

    
    props.setCurrentTrack(nextSongId); //set current tract
    setPlaying(true);
  }


  const playPreviousSong =()=>{
    let previousSongId = props.currentSong.id === 0? 4 : props.currentSong.id -1;
    props.setCurrentTrack(previousSongId);
    setPlaying(true);
  }

  const toggleShuffle=()=>{
    setSongsRemaining([0, 1, 2, 3, 4]);
    setShuffle(!shuffle);
    console.log(shuffle);
  }

  const changeAudioPosition=(e)=>{
    audioPlayer.current.currentTime = e.target.value;
    setDurationPlayed(e.target.value);
  }

  useEffect(() => {

    audioPlayer.current.load(); 
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
        <span>{props.currentSong.name}</span>
      </div>
      <div>
        <div className='controls-btn'>
          <button onClick={toggleShuffle}><i className={shuffle? "bi bi-shuffle green-elem" : "bi bi-shuffle"}></i></button>
          <button onClick={playPreviousSong}><i class="fas fa-step-backward"></i></button>
          <button onClick={playPauseAudioTrack}  className="playpausebtn"><i className={playing? "fas fa-pause": "fas fa-play"}></i></button>
          <button onClick={PlayNextSong}><i className="fas fa-step-forward"></i></button>
          <button onClick={toggleShuffle}><i className={shuffle? "bi bi-shuffle green-elem" : "bi bi-shuffle"}></i></button>
        </div>
        <audio
          onEnded={PlayNextSong}
          autoPlay = {true}
          ref= {audioPlayer}
          src={props.currentSong.path}
        >
        </audio>
        <footer style={{display: "flex", justifyContent:"center"}}>
          <input type = "range" id="song-bar" min="0" max={maximumDuration} value={durationPlayed} onChange={changeAudioPosition}></input>
        </footer>

      </div>
      <div className='volume-div'>
        <i class="bi bi-volume-down-fill"></i> 
        <input type = "range" id="volume-range" min={0} max={100} onChange={changeAudioVolume} value={audioVolume*100}></input>
      </div>

      
    </div>
  );
  
}
