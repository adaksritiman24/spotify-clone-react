import React from 'react';
import Song from './Song';

export default function Playlist({ audio, setCurrentTrack , currentSongId}) {
    const songs =audio.map((audio,name )=>(<Song 
    key={audio.id}
    id={audio.id}
    currentSongId={currentSongId}
    setCurrentTrack = {setCurrentTrack}
    name={audio.name}>
        {audio.name}
    </Song>))
    
    return (
    <div className='main'>
        {songs}
    </div>
    )

}
