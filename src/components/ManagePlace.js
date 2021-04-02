import React, { useEffect, useState } from 'react'
import AdminNav from './AdminNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

function ManagePlace() {
    const [places, setPlaces]= useState([]);
    useEffect(()=> {
        fetch('https://thawing-woodland-74555.herokuapp.com/allPlaces')
        .then(res=> res.json())
        .then(data=> setPlaces(data))
        .catch(err=> console.log(err))
    }, [])
    const handleDelete= (_id)=> {
        fetch('https://thawing-woodland-74555.herokuapp.com/deletePlace?_id='+_id, {
            method: 'DELETE',
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            alert('The item has been removed. Next time you come to this page, it will no longer exist.')
        })
        .catch(err=> console.log(err))
    }
    return (
        <div className="manage-place">
            <AdminNav></AdminNav>
            <div className="manage-place-body">
                <h2>Manage Visiting Places</h2>
                <table className="table bg-white rounded-3 mt-4 text-center table-striped">
                    <thead>
                        <tr className="table-success">
                        <th scope="col">Visiting Place</th>
                        <th scope="col">Country</th>
                        <th scope="col">Travel Fee</th>
                        <th scope="col">Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {places.map(place=> {
                            const {_id, name, country, money}= place;
                            return (
                               <tr key={_id}>
                                  <th scope="row">{name}</th>
                                  <td>{country}</td>
                                  <td>$ {money}</td>
                                  <td>
                                    <FontAwesomeIcon style={{marginRight: '10px', color: 'green'}} icon={faEdit}/> 
                                    <FontAwesomeIcon style={{color: 'red', cursor: 'pointer'}} icon={faTrash} onClick={()=> handleDelete(_id)}/>
                                  </td>
                                </tr> 
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManagePlace
