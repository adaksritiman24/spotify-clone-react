import React from 'react'
import "./Song.css";
export default function Song(props) {
  return (
    <tr className={props.id===props.currentSongId? "playing-song" : "abc"}>
      <td onClick={()=>props.setCurrentTrack(props.id)} className="song-name">
        {(()=>{
          if(props.id===props.currentSongId){
            return(
              <img src="imgs/playing.gif" alt="#" width="17px" style={{marginRight: "5px"}}></img>
            );
          }
          else{
            return (
              <span style={{marginRight:"22px"}}></span>
            );
          }
          
        })()}
        {props.name}
      </td>
      <td>2 hours ago</td>
      <td>{props.duration}</td>
      
    </tr>
  )
}
