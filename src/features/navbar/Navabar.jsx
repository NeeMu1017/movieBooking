import React from 'react';
import "./Navbar.css"


const Navabar = () => {
    return (
        <nav className='navabr navbar-expand-lg bg-info p-3'>
            <div className='container-fluid'>
                <a className="navbar-brand" href="#">
                    <img src="https://pixner.net/boleto/demo/assets/images/logo/logo.png"></img>
                </a>
                <div className='float-end'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item p-2'>
                            <a href='#'>Home</a>
                        </li>
                        <li className='nav-item p-2'>
                            <a href='#'>Contact</a>
                        </li>
                        <button className='btn btn-outline-dark p-2'>Jion us</button>
                    </ul>



                </div>
            </div>


        </nav>
    )
}

export default Navabar