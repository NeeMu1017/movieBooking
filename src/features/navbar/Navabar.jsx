import React, { useState } from 'react';
import "./Navbar.css"


const Navabar = () => {
    const [ismobile, setIsmobile] = useState(false);

    return (
        <nav className="nav">
            <div className='navbar_logo'>MovieBook</div>
            <div  >
                <ul className={!ismobile ? 'navbar_items' : "navbar_items_mobile"}
                onClick={()=> setIsmobile(false)}
                >
                    <li className='navbar_items_li'>
                        <a className='navbar_items_li_a' href='#'>Home</a>
                    </li>
                    <li className='navbar_items_li'>
                        <a className='navbar_items_li_a' href='#'>contact</a>
                    </li>
                    <li className='navbar_items_li'>
                        <a className='navbar_items_li_a' href='#'>About</a>
                    </li>
                    <li className='navbar_items_li'>
                        <a className='navbar_items_li_a' href='#'>cart</a>
                    </li>
                    <button className='btn btn-outline-success mt-2 fw-bold Loginbtn'
                    
                    > LogIn</button>
                   

                </ul>

            </div>
          
            
            <div className='mobile' >
              
            <button
                onClick={()=> !ismobile ? setIsmobile(true) : setIsmobile(false)} className='mobile'
            > {!ismobile ? <i className="fas fa-bars butn" ></i> :
             <i className="fas fa-times butn"></i>}</button> 
               

            </div>
        </nav>
    )
}

export default Navabar