import React from 'react'
import './header.css'

function Header() {
    return (
    
        
        <div className="header">

            <div className="navHeader">

                <div className="logo">Wizic</div>

                <div className="uploadLink">Upload<img src="src/img/Icons/HeadPhone.svg"></img></div>

            </div>

            <div className="search">
        
                <input type="text" className="inputSearch" placeholder="Search..."></input>
            
            </div>

  
        
    </div>
    )
}

export default Header