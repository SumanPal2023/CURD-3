import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {

    const [productsData, setProductsData] = useState([]);

    useEffect(() => {

        let fetchProducts = async () => {
            let response = await axios.get("https://dummyjson.com/products")
            let resData = await response.data.products
            console.log(resData)
            setProductsData(resData);
        }
        fetchProducts()
    }, [])
    return (
        <div className='home'>

            {
                productsData.map((prod, index) => {
                    return <div className='user-details' key={index}>
                        <h1>  {prod.title} </h1>
                        <p> {prod.availabilityStatus}</p>
                        <p>{prod.price}</p>
                        <button>view more</button>
                    </div>
                })
            }
        </div>
    )
}

export default Home
