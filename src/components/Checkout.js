import React, { useContext, useEffect, useState } from 'react'
import { Redirect, useParams, useHistory } from 'react-router-dom';
import { UserContext } from '../App';

function Checkout() {
    const [loggedUser, setLoggedUser]= useContext(UserContext);
    const {_id}= useParams();
    const history= useHistory();
    const [checkoutPlace, setCheckoutPlace] = useState({});
    useEffect(()=> {
        fetch('https://thawing-woodland-74555.herokuapp.com/place/'+_id)
        .then(res=> res.json())
        .then(data=> setCheckoutPlace(data))
        .catch(err=> console.log(err))
    }, [_id])
    const handleCheckout= ()=> {
        const dataToSend= {
            email: loggedUser.email,
            place_id: _id,
            date: new Date()
        }
            fetch('http://localhost:3001/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
            })
            .then(res=> res.json())
            .then(data=> {
                console.log(data);
                history.push('/orders');
            })
            .catch(err=> console.log(err))
    }

    return (
        <div className="mt-5 container">
            <div className="checkout">
            <h1 className="mb-4">Checkout</h1>
                <table className="table">
                    <thead className="text-muted">
                        <tr>
                        <th scope="col">Selected Place</th>
                        <th scope="col">Country</th>
                        <th scope="col">Travel Fee</th>
                        </tr>
                    </thead>
                    <tbody className="fw-bold">
                        <tr>
                        <td>{checkoutPlace.name}</td>
                        <td>{checkoutPlace.country}</td>
                        <td>$ {checkoutPlace.money}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="text-end mt-5">
                <button className="btn btn-success" onClick={handleCheckout}>Checkout</button>
                </div>
               
            </div>
        </div>
    )
}

export default Checkout
