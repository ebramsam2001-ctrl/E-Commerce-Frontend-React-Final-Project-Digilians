import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [isVisable, setVisable] = useState(true);

    let onXclicked = () => {
        setVisable(false);
    };

    return (
        <>
            {
                isVisable && (
                    <div id='sales' className="bg-light py-2">
                        <div className="container d-flex align-items-center">
                            <div className="d-flex align-items-center ms-auto">
                                <i className="fa-solid fa-ticket-simple me-2"></i>

                                <p className="mb-0">
                                    30% off storewide — Limited time!
                                    <Link className="ms-2 border-dark fw-bold" to="/shop">
                                        Shop Now
                                    </Link>
                                </p>
                            </div>

                            <div className="ms-auto">
                                <Link className="ms-2 border-dark fw-bold"
                                    to="#"
                                    onClick={onXclicked}
                                >
                                    <i className="fa-solid fa-xmark cursor-pointer text-dark"></i>
                                </Link>
                            </div>

                        </div>
                    </div>
                )
            }

            <nav className="navbar navbar-expand-lg bg-white shadow-sm">
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/">VisioCreate</Link>
                    
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto gap-5">
                            <Link className="nav-link" to="/home">Home</Link>
                            <Link className="nav-link" to="/shop">Shop</Link>
                            <Link className="nav-link" to="/products">Product</Link>
                            <Link className="nav-link" to="/contacts">Contact Us</Link>
                        </div>

                        <div className="navbar-nav ms-auto gap-2">
                            <Link className="nav-link" to="#">
                                <i className="fa-solid fa-magnifying-glass text-dark"></i>
                            </Link>
                            <Link className="nav-link" to="/myaccount">
                                <i className="fa-regular fa-user text-dark"></i>
                            </Link>
                            <Link className="nav-link" to="#">
                                <i className="fa-solid fa-bag-shopping text-dark"></i>
                            </Link>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}
