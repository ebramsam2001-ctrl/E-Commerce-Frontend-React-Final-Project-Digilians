import React from 'react'
import ShopCover from './ShopCover';
import ShopFilter from './ShopFilter';
import ShopProducts from './ShopProducts';

export default function Shop() {
  return (
    <>
        <div className="my-3">
            <ShopCover />

            <ShopFilter />

            <ShopProducts />
        </div>
        
    </>
  );
}
