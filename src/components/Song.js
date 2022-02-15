import React from 'react'
import "./Song.css";
export default function Song(props) {
  return (
    <tr className={props.id===props.currentSongId? "playing-song" : "abc"}>
      <td onClick={()=>props.setCurrentTrack(props.id)} className="song-name">{props.name}</td>
      <td>2 hours ago</td>
      <td>{props.duration}</td>
      
    </tr>
  )
}
