import React from "react";
import { Link } from "react-router-dom";
import "components/header/Header.css";
import logo from '../../images/gif.png'

export const Header = () => {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link to={"/"} className='class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"'>
                <img className="logo" src={logo} alt='logo'/>
            </Link>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
               <li ><a className="nav-link px-2 text-secondary" href="/#">About</a></li>
               <li ><a className="nav-link px-2 text-secondary" href="/#">Contact</a></li>
               <li ><a className="nav-link px-2 text-secondary" href="/#">Features</a></li>
            </ul>
        </div>
      </div>
    </header>
  );
};
