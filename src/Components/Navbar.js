import React from 'react';
import './Navbar.css';
import ungrammaryy from "./Images/Artboardpng.png";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light p-0 ">
            <span className="navbar-brand mx-5  " href="/">{<img src={ungrammaryy} alt='Logo' className='logo' />}</span>
            <button className="navbar-toggler tgl" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link mx-3 " href="/" >About us </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link mx-3" href="/">Solution</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link mx-3" href="/">Global Network</a>
                    </li>
                </ul>
                <form className="form-inline mx-3 my-lg-0">
                    <div className='cnctus'>
                        <button className="btn btn-outline-success my-3 mx-5 btn1  " type="submit">Contact us</button>

                        <div className="dropdown">
                            <button className="btn  dropdown-toggle flgbtn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             <img src='https://www.countryflags.com/wp-content/uploads/flags/us.png' alt='US' className='flg'></img>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="/"><img src='https://www.countryflags.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/nl.png' alt='france' /></a>

                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </nav>
    );
}



