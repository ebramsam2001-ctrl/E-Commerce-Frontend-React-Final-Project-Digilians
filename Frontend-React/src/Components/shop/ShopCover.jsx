import React from 'react'

import image_9 from "../../assets/image_9.jpeg"
import { Link } from 'react-router-dom';

export default function ShopCover() {
    return (
        <>
            <div className="container rounded-4 w-100 overflow-hidden d-flex flex-column justify-content-center align-items-center"
                 style={{
                    backgroundImage: `url(${image_9})`,
                    height: "300px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                 }}
            >
                <div className='text-muted'>
                    <Link className="nav-link d-inline-block" to="/home">Home</Link>
                    <p className='d-inline-block'>&nbsp; &gt; &nbsp;</p>
                    <Link className="nav-link d-inline-block fw-bolder" to="/shop">Shop</Link>
                </div>

                <h1 className='fs-1'> Shop Page</h1>

                <p>Let's design the place you always imagined</p>
            </div>
        </>
    );
}
