import React from 'react';
import Song from './Song';
import "./Playlist.css";
export default function Playlist({ audio, setCurrentTrack , currentSongId}) {
    const songs =audio.map((audio,name )=>(<Song 
    key={audio.id}
    id={audio.id}
    currentSongId={currentSongId}
    setCurrentTrack = {setCurrentTrack}
    duration = {audio.duration}
    name={audio.name}>
        {audio.name}
    </Song>))
    
    return (
    <div className='main'>
        <div className='banner'>
            <img src='imgs/Electronic.jpg' alt="not found"></img>
            <div>
                <p>Playlist</p>
                <h1>Electronic</h1>
                <div><b>Developer {audio.length} songs</b>16 mins 2 secs</div>
            </div>
        </div>
        <div className='song-playlist'>
            <div>
                <i class="bi bi-play-circle-fill"></i>
            </div>
            <table className='song-table'>
                <tr>
                    <th># Title</th>
                    <th>Date Added</th>
                    <th><i class="bi bi-clock"></i></th>
                </tr>
                    {songs}
            </table>
                
        </div>
        
    </div>
    )

}
