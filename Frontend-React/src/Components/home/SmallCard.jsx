import React from 'react'
import { Link } from 'react-router-dom';

export default function SmallCard(props) {
    const { category } = props;

    return (
        <>
            <div className="card rounded-5">
                <div className="row h-100 align-items-center g-0">
                    <div className="col-6 ps-5">
                        <h3 className="fw-bold h2 mb-2">{category.title}</h3>
                        <Link to="/shop"
                              className="text-dark fw-semibold text-decoration-none border-bottom border-dark pb-1"
                        >
                            Shop Now <i className="bi bi-arrow-right ms-1"></i>
                        </Link>
                    </div>
                    
                    <div className="col-6 h-100">
                        <img src={category.image} className="w-100 h-100 object-fit-contain p-4" alt={category.title} />
                    </div>
                </div>
            </div>
        </>
    )
}
