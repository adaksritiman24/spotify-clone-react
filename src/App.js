import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import MusicControl from './components/MusicControl';
import {audio} from './audio';


function App() {
    const [song, setSong] = useState(audio[0]);
    const [pageType, setPageType] = useState("home");


    const setCurrentTrack = (id)=>{
        var newsong = audio.filter((song)=>song.id === id)[0];
        setSong(newsong);
    }

    
    return (
        <div className='container'>
            <Navbar setPageType={setPageType}/>
            <Main audio = {audio} setCurrentTrack= {setCurrentTrack} pageType={pageType} setPageType={setPageType} songId={song.id}/>
            <MusicControl currentSong={song} setCurrentTrack={setCurrentTrack}/>
        </div>
    )
}

export default App;
