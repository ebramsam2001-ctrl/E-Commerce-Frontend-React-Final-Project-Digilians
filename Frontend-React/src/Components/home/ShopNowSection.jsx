import React from 'react'

import image_2 from "../../assets/image_2.jpeg"
import { Link } from 'react-router-dom';

export default function ShopNowSection() {
    return (
        <>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <img className='w-100' src={image_2} alt="Shop Now" />
                    </div>

                    <div className="col-md-6">
                        <div className="d-flex flex-column justify-content-center align-items-center text-center h-100">
                            <span className="text-primary fw-bold text-uppercase small d-block mb-3">
                                Sale up to 35% off
                            </span>

                            <h2 className="display-4 fw-bold text-dark mb-4 lh-1">
                                HUNDREDS of <br /> New lower prices!
                            </h2>

                            <p className="text-muted fs-5 mb-4 pe-md-5">
                                It’s more affordable than ever to give every room in your home a stylish makeover.
                            </p>

                            <Link to="/shop" className="text-dark fw-bold text-decoration-none border-bottom border-dark pb-1 d-inline-flex align-items-center">
                                Shop Now <i className="bi bi-arrow-right ms-2"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}