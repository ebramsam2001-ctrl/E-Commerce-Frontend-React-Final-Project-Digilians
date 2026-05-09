import React from 'react'
import { Link } from 'react-router-dom';

import image_6 from "../../assets/image_6.jpeg"

export default function MyAccountLeftSide({ name }) {
    return (
        <>
            <div className="m-5 bg-body-secondary rounded-5 p-5">
                <div className="d-flex justify-content-center align-items-center w-100 my-5">
                    <div className="shadow-sm border border-2 border-white"
                        style={{
                            backgroundImage: `url("${image_6}")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',

                            width: '100px',
                            height: '100px',
                            borderRadius: '50%'
                        }}
                    >
                    </div>
                </div>

                <h2 className='d-flex justify-content-center align-item-center w-100 h-100 my-5'>{name ||"Ebram Samuel"}</h2>

                <div className="d-flex flex-column">
                    <Link className='text-decoration-none text-dark fw-bolder fs-4 border-bottom border-1 border-dark'
                        to="account"
                    >
                        Account
                    </Link>
                    <Link className='text-decoration-none text-dark fs-4'
                        to="address"
                    >
                        Address
                    </Link>
                    <Link className='text-decoration-none text-dark fs-4'
                        to="order"
                    >
                        Order
                    </Link>
                    <Link className='text-decoration-none text-dark fs-4'
                        to="wishlist"
                    >
                        Wishlist
                    </Link>
                    <Link className='text-decoration-none text-dark fs-4'
                        to="logout"
                    >
                        LogOut
                    </Link>
                </div>
            </div>
        </>
    );
}
