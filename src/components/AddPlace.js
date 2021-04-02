import React, { useState } from 'react'
import AdminNav from './AdminNav';

function AddPlace() {
    const [information, setInformation]= useState({}); 
    const [imageURL, setImageURL]= useState('')

    const handleInput= (e)=> {
        const name= e.target.name;
        const value= e.target.value;
        setInformation({...information, [name]: value})
    }
    const handleImage= (e)=> {
        const imgFile= e.target.files[0];
        const file= new FormData();
        file.append('image', imgFile);
        file.set('key', '8ce188d14fc210b8d6e1c1165b3dac8c');
        fetch('https://api.imgbb.com/1/upload', {
            method: "POST",
            body: file 
        })
        .then(res=> res.json())
        .then(data=> setImageURL(data.data.display_url))
    }
    const handleSave= (e)=> {
        e.preventDefault();
        const dataToSend= {...information, imageURL};
        if(imageURL===''){
            alert('Please wait for the image to be saved.')
        }else{
            fetch('https://thawing-woodland-74555.herokuapp.com/addPlace', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
            })
            .then(res=> res.json())
            .then(data=> {
                console.log(data);
                alert('Your item has been added.')
            })
            .catch(err=> console.log(err))
        }
    }
    return (
        <div className="add-place">
            <AdminNav></AdminNav>
            <div className="add-place-body">
                <form action="" className="row">
                    <h3>Add a Place</h3>
                    <div className="col-md-6">
                        <h5>Place Name</h5>
                        <input type="text" className="form-control" placeholder="Enter name" name="name" onBlur={handleInput}/>
                    </div>
                    <div className="col-md-6">
                        <h5>Country</h5>
                        <input type="text" className="form-control" placeholder="Enter country" name="country" onBlur={handleInput}/>
                    </div>
                    <div className="col-md-6">
                        <h5>Booking Money</h5>
                        <input type="text" className="form-control" placeholder="Enter booking money" name="money" onBlur={handleInput}/>
                    </div>
                    <div className="col-md-6">
                        <h5>Add image</h5>
                        <input className="form-control" type="file" id="formFile" onChange={handleImage}/>
                    </div>
                    <div className="col-md-6"></div>
                    <div className="col-md-6 text-end">
                        <button style={{padding: "5px 20px"}} className="btn btn-success" onClick={handleSave}>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddPlace
