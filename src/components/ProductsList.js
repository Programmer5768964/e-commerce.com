import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products')

        result = await result.json();
        setProducts(result);
    }




    // console.warn("products", products);
    return (
        <div className='product-list'>
            <h1>Product List</h1>
            <ul>
                <li>S. No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Catagory</li>
            </ul>

            {
                products.map(() =>
                    <ul>
                        <li>S. No.</li>
                        <li>Name</li>
                        <li>Price</li>
                        <li>Catagory</li>
                    </ul>
                )
            }

        </div>
    )
}

export default ProductList;