import React, { useState } from 'react'

const CreateProduct = () => {
    let [id,setId]=useState("");
    let [title,setTitle]=useState("")
    let[availabilityStatus,setAvailabilityStatus]=useState("")
    let [brand,setBrand]=useState("");
    let [category,setCategory]=useState();
    let [description,setdescription]=useState("")
    let [price,setPrice]=useState("")
  return (
    <div>
        <form action="" className="form-data">
            <div className="form-group">
                <label htmlFor="id">Enter Product Id</label>
                <input type="number" id='id' placeholder='Enter product id' />
            </div>
            <div className="form-group">
                <label htmlFor="title">Enter Product Title</label>
                <input type="text" id='title' placeholder='Enter product Title' />
            </div>
            <div className="form-group">
                <label htmlFor="available">Enter Product Avability status</label>
                <input type="text" id='available' placeholder='Enter product availability' />
            </div>
            <div className="form-group">
                <label htmlFor="brand">Enter Product Brand</label>
                <input type="text" id='brand' placeholder='Enter product brand' />
            </div>
            <div className="form-group">
                <label htmlFor="category">Enter Product category</label>
                <input type="text" id='category' placeholder='Enter product category' />
            </div>
            <div className="form-group">
                <label htmlFor="description">Enter Product description</label>
                <input type="text" id='description' placeholder='Enter product description' />
            </div>
            <div className="form-group">
                <label htmlFor="price">Enter Product price</label>
                <input type="text" id='price' placeholder='Enter product price' />
            </div>
        </form>
      
    </div>
  )
}

export default CreateProduct
