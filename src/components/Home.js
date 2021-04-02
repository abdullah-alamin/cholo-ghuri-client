import React, { useEffect, useState } from 'react'
import Card from './Card'

function Home() {
    const [places, setPlaces]= useState([]);

    useEffect(()=> {
        fetch('https://thawing-woodland-74555.herokuapp.com/allPlaces')
        .then(res=> res.json())
        .then(data=> setPlaces(data))
        .catch(err=> console.log(err))
    }, [])

    return (
        <div className="mt-4 container">
            <div className="row justify-content-evenly">
                {places.map(place=> <Card key={place._id} place={place}></Card>)}
            </div>
        </div>
    )
}

export default Home
