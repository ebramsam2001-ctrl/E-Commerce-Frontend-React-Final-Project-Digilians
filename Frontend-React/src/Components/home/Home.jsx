import React from 'react'

import image_1 from "../../assets/image_1.jpeg"
import image_2 from "../../assets/image_2.jpeg"
import image_3 from "../../assets/image_3.jpeg"
import image_4 from "../../assets/image_4.jpeg"
import image_5 from "../../assets/image_5.jpeg"
import image_6 from "../../assets/image_6.jpeg"
import Carousel from './Carousel'
import CategorysHome from './CategorysHome'
import NewArrivals from './NewArrivals'
import ServicesSection from './ServicesSection'
import ShopNowSection from './ShopNowSection'
import ArticlesSection from './ArticlesSection'

export default function Home() {
    const categorys = [
        {
            image: image_4,
            title: "Living Room",
        },
        {
            image: image_5,
            title: "Bedroom",
        },
        {
            image: image_6,
            title: "Kitchen",
        }
    ];

    return (
        <>
            <Carousel images={[image_1, image_2, image_3]} />
            
            <CategorysHome categorys={categorys} />

            <NewArrivals />

            <ServicesSection />

            <ShopNowSection />

            <ArticlesSection />
        </>
    )
}
