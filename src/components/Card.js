import React from 'react'
import { Link } from 'react-router-dom';
import img from '../images/island.jpg';

function Card({place}) {
    const {_id, name, country, money, imageURL}= place;
  
    return (
        <div className="card my-card" style={{padding: '0px'}}>
            <img src={imageURL} style={{width: "100%"}} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text text-muted">{country}</p>
            </div>
            <div className="card-footer my-card-footer">
                <h4 className="price text-success">$ {money}</h4>
                <Link to={`/checkout/${_id}`} href="#" className="btn btn-success">Wanna Visit !</Link>
            </div>    
        </div>
    )
}

export default Card
