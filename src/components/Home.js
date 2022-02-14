import React from 'react'
import "./Homepage.css";
export default function Home(props) {
  return (
      <>
    <h2 className='heading-playlist'>Available Playlists</h2>

    <div className='homepage'>

        <div onClick={()=>props.setPageType("playlist")}>
            <img src="imgs/Electronic.jpg"></img>
            <div>
                <h3>Electronic</h3>
                <p>by Developer</p>
            </div>
        </div>
        
    </div>
    </>
  )
}
