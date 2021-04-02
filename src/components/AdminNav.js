import React from 'react'
import { Link } from 'react-router-dom'

function AdminNav() {
    return (
        <div className="add-place-nav">
            <h2><Link to="/" className="link">CHOLO GHURI</Link></h2>
            <div>
                <p><Link to="/managePlace" className="link">Manage Places</Link></p>
                <p><Link to="/addPlace" className="link">Add Place</Link></p>
                <p>Edit Place</p>
            </div>
        </div>
    )
}

export default AdminNav
