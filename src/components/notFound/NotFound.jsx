import React from 'react'
import notFound from "../../assets/notFound.png"

export default function NotFound() {
  return (
    <>
        <div className='vh-100 d-flex align-item-center justify-content-center'>
            <img className='vh-100' src={notFound} alt="Not Found (404)" />
        </div>
    </>
  );
}
