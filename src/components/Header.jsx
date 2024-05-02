import React from "react";
import Login_Modal from "./Login_Modal";
import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
    const[modalIsOpen, setIsOpen] = useState(false);
    function openModal(){
        setIsOpen(!modalIsOpen);
    }
    
    return (
        <>
            <div className="header">
                <ul>
                    <li>
                        <Link to="/">Logo</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/team">TEAM</Link>
                    </li>
                    <li>
                        <Link to="/work">WORK</Link>
                    </li>
                    <li>
                        <Link to="/pricing">PRICING</Link>
                    </li>
                    <li>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <button onClick={openModal}>Login</button>
                        <Login_Modal openModal={modalIsOpen}  /> 
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header;