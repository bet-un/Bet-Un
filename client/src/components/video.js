import React from 'react'
import '../App.css';


const Video = () => {
    return (
        <div className='video-header'>
            <video loop muted autoPlay poster='../components/campofoto.png' className="vid">
                <source src={require('../components/campo.mp4')} type='video/mp4' />
            </video>
        </div>
    )
}
export default Video