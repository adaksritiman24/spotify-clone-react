import React from 'react'
import Home from './Home';
import "./Main.css";
import Playlist from './Playlist';

export default function Main({pageType, audio, setCurrentTrack, setPageType, songId}) {
  
  var page = undefined;
  if(pageType === "playlist"){
    page = <Playlist
    audio={audio}
    setCurrentTrack={setCurrentTrack}
    currentSongId={songId}
  />
  }
  if(pageType === "home"){
    page = <Home
    setPageType={setPageType}
    />
  }
  
 
  return (
    <div className='main'>
        {page}
    </div>
  )
}

