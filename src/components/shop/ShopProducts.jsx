import React, { useEffect, useState } from 'react'

// import image_7 from "../../assets/image_7.jpeg"

import NewArrivalsProductCard from "../home/NewArrivalsProductCard"
import axios from 'axios';

export default function ShopProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const response = await axios.get("http://localhost:5000/products");
                console.log(response.data);
                setProducts(response.data.products || response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
                setProducts([]);
            }
        };
        
        loadProducts();
    }, []);

    return (
        <>
            <div className="container m-5">
                <div className="row">
                    {
                        Array.isArray(products) && products.length > 0 ? (
                            products.map((product) => (
                                <NewArrivalsProductCard
                                    key={product._id}
                                    image={product.image}
                                    title={product.name}
                                    price={product.price}
                                    oldPrice={product.oldPrice || "400.00"}
                                    discount={product.discount || "-50 %"}
                                    rating={product.rating || 5}
                                    isNew={product.isNew || true}
                                />
                            ))
                        ) : (
                            <div className="col-12 text-center py-5">
                                <div className="spinner-border text-secondary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <p className="text-secondary mt-2">Loading products...</p>
                            </div>
                        )
                    }
                </div>

                <div className="d-grid gap-2">
                    <button className="btn btn-outline-secondary rounded-5" type="button">Show More</button>
                </div>
            </div>
        </>
    );
}
