import React from 'react'
import movieDbLogo from './moviedblogo.svg';

export default function Footer() {
    return (
        <div className="footer">
            <img src={movieDbLogo} alt="MovieDb Logo"></img>
            <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
            <p>@ Cullen Kuch 2020</p>
        </div>
    )
}
