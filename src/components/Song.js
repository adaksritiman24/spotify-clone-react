import React from 'react'
import "./Song.css";
export default function Song(props) {
  return (
    <div onClick={()=>props.setCurrentTrack(props.id)} className={props.id===props.currentSongId? "playing-song" : "abc"}>{props.name}</div>
  )
}
