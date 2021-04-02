import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../App';
import image from '../images/island.jpg'
function Orders() {
    const [orders, setOrders]= useState([]);
    const [loggedUser, setLoggedUser]= useContext(UserContext);
    const email= loggedUser.email;
    useEffect(()=> {
        fetch('https://thawing-woodland-74555.herokuapp.com/orders?email='+email)
        .then(res=> res.json())
        .then(data=> setOrders(data))
        .catch(err=> console.log(err))
    }, [])
    return (
        <div className="orders container">
            <h1 className="text-center my-5">Places You've Chosen</h1>
            <div className="d-flex justify-content-center flex-wrap">
            {orders.map(order=> {
                const {name, country, money, imageURL}= order;
                return(
                    <div key={imageURL} className="card text-white">
                        <img src={imageURL} className="card-img" alt="..."/>
                        <div className="card-img-overlay my-overlay text-center">
                            <h4 className="card-title">{name}</h4>
                            <h6 className="card-text">{country}</h6>
                            <h5>$ {money}</h5>
                        </div>
                    </div>    
                )
            })}
            </div> 
                  
        </div>
    )
}

export default Orders
