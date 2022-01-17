import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className ="navbar">
            <div className ="logo">
                <img src="../img/default.png" alt="logo" className="logo-img" />
                <a href ="" className="title">StudyView</a>
            </div>
            <ul className="nav-links">
                <div className="navbar-nav-mr-auto nav-right">
                    <li>
                        <Link to ="/" className="home-button">Home</Link>
                    </li>
                    <li>
                        <Link to ="/model" className="ViewModelsButton">View Models</Link>
                    </li>
                    <li>
                        <Link to ="/upload" className="uploadButton">Upload</Link>
                    </li>
                    <li>
                        <Link to ="/holoview" className="holoviewButton">HoloView</Link>
                    </li>
                    <li>
                        <Link to ="/about" className="aboutButton">About</Link>
                    </li>
                </div>
            </ul>
        </nav>
    )
}
export default Navbar