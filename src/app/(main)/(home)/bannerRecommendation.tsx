"use client"

import Splide from '@splidejs/splide'
import '@splidejs/splide/css'
import Image from 'next/image'
import { useEffect } from 'react'

const BannerRecommendation = () => {
    useEffect(() => {
        const splide = new Splide('#banner-recommendation', {
            autoplay: 'pause',
            perPage: 1,
            type: 'loop',
            height: 400
        })

        splide.on("mounted", () => {
            splide.Components.Autoplay.play()
        })

        splide.mount()
    })

    return <section className="splide" aria-labelledby="carousel-heading" id='banner-recommendation'>
        <div className="splide__slider">
            <div className="splide__track">
                <ul className="splide__list">
                    <div className="splide__slide">
                        <Image
                            src="https://res.cloudinary.com/ddzlmw5rp/image/upload/v1678305628/samples/ecommerce/accessories-bag.jpg"
                            fill
                            className='!relative !object-cover'
                            sizes='100vw'
                            alt='Product' />
                    </div>
                    <div className="splide__slide">
                        <Image
                            src="https://res.cloudinary.com/ddzlmw5rp/image/upload/v1678305627/samples/ecommerce/leather-bag-gray.jpg"
                            fill
                            className='!relative !object-cover'
                            sizes='100vw'
                            alt='Product 2' />
                    </div>
                    <div className="splide__slide">
                        <Image
                            src="https://res.cloudinary.com/ddzlmw5rp/image/upload/v1678305622/samples/ecommerce/shoes.png"
                            fill
                            className='!relative !object-cover'
                            sizes='100vw'
                            alt='Product 3' />
                    </div>
                    <div className="splide__slide">
                        <Image
                            src="https://res.cloudinary.com/ddzlmw5rp/image/upload/v1678305618/samples/ecommerce/analog-classic.jpg"
                            fill
                            className='!relative !object-cover'
                            sizes='100vw'
                            alt='Product 4' />
                    </div>
                </ul>
            </div>
        </div>
    </section>
}

export default BannerRecommendation