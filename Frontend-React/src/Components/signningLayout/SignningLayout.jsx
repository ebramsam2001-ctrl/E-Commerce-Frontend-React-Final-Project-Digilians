import React from 'react'

import image_5 from "../../assets/image_5.jpeg"
import { Outlet } from 'react-router-dom';

export default function SignningLayout() {
  return (
    <>
        <div className="container-fluid vh-75">
            <div className="row">
                <div className="col-md-6">
                    <img src={image_5} alt="Left Side image" />
                </div>
                <div className="col-md-6">
                    <Outlet />
                </div>
            </div>
        </div>
    </>
  );
}
