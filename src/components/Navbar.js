import React from 'react'
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <div className='navbar'>
        <div className='brand'>
        <i class="bi bi-spotify"></i> Spotify
        </div>

        <div className='options'>
            <div onClick={()=>props.setPageType('home')}><i class="bi bi-house-door-fill"></i> Home</div>
            <div onClick={()=>props.setPageType('search')}><i class="bi bi-search"></i> Search</div>
            <div onClick={()=>props.setPageType('library')}><i class="bi bi-music-note-list"></i> Your Library</div>
        </div>

        <hr/>
        <div>
          <div onClick={()=>props.setPageType('playlist')}>Electronic</div>
        </div>
    </div>
  )
}
