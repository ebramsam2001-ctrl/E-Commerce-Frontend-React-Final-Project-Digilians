import React from 'react'
import { Link } from 'react-router-dom';

export default function BigCard(props) {
    const { category } = props;

    return (
        <>
            <div className="card rounded-5">
                <div className="p-5 top-0 start-0">
                    <h3 className="fw-bold h2 mb-2">{category.title}</h3>
                    <Link to="/shop" className="text-dark fw-semibold text-decoration-none border-bottom border-dark pb-1">
                        Shop Now <i className="bi bi-arrow-right ms-1"></i>
                    </Link>
                </div>
                
                <img src={category.image} className="w-75 bottom-0 start-0 object-fit-contain" alt={category.title} />
            </div>
        </>
    );
}
