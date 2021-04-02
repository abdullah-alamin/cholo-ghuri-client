import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'

function Navbar() {
    const [loggedUser, setLoggedUser]= useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                    <Link className="navbar-brand" to="/">CHOLO GHURI</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link" to="/" aria-current="page" >Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/orders">Orders</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="addPlace">Admin</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link " to="/">Deals</Link>
                    </li>
                    <li className="nav-item">
                  {loggedUser.email ? "": <Link to="/login" className='btn btn-success'>Login</Link>}  
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
