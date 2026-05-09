import React from 'react'
import { Link } from 'react-router-dom';

import NewArrivalsProductCard from "./NewArrivalsProductCard"

import image_7 from "../../assets/image_7.jpeg"

export default function NewArrivals() {
    return (
        <div className="container my-5">
            <div className="d-flex justify-content-between align-items-end pb-3">

                <div className="d-flex flex-column lh-1">
                    <p className="h1 fw-bold mb-0">New</p>
                    <p className="h1 fw-bold mb-0">Arrivals</p><h1></h1>
                </div>

                <Link to="/products" className="text-dark fw-semibold text-decoration-none border-bottom border-dark pb-1 mb-1">
                    More Products <i className="bi bi-arrow-right ms-1"></i>
                </Link>
            </div>

            <div className="d-flex flex-nowrap overflow-x-auto pb-4 custom-scroll gap-3">
                <NewArrivalsProductCard
                    image={image_7}
                    title="Loveseat Sofa"
                    price="199.00"
                    oldPrice="400.00"
                    discount="-50 %"
                    rating={5}
                    isNew={true}
                />

                <NewArrivalsProductCard
                    image={image_7}
                    title="Loveseat Sofa"
                    price="199.00"
                    oldPrice="400.00"
                    discount="-50 %"
                    rating={5}
                    isNew={true}
                />

                <NewArrivalsProductCard
                    image={image_7}
                    title="Loveseat Sofa"
                    price="199.00"
                    oldPrice="400.00"
                    discount="-50 %"
                    rating={5}
                    isNew={true}
                />

                <NewArrivalsProductCard
                    image={image_7}
                    title="Loveseat Sofa"
                    price="199.00"
                    oldPrice="400.00"
                    discount="-50 %"
                    rating={5}
                    isNew={true}
                />

                <NewArrivalsProductCard
                    image={image_7}
                    title="Loveseat Sofa"
                    price="199.00"
                    oldPrice="400.00"
                    discount="-50 %"
                    rating={5}
                    isNew={true}
                />

                <NewArrivalsProductCard
                    image={image_7}
                    title="Loveseat Sofa"
                    price="199.00"
                    oldPrice="400.00"
                    discount="-50 %"
                    rating={5}
                    isNew={true}
                />

                <NewArrivalsProductCard
                    image={image_7}
                    title="Loveseat Sofa"
                    price="199.00"
                    oldPrice="400.00"
                    discount="-50 %"
                    rating={5}
                    isNew={true}
                />

                <NewArrivalsProductCard
                    image={image_7}
                    title="Loveseat Sofa"
                    price="199.00"
                    oldPrice="400.00"
                    discount="-50 %"
                    rating={5}
                    isNew={true}
                />
            </div>
        </div>
    );
}