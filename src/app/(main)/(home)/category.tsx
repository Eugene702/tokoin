"use client"

import Splide from '@splidejs/splide'
import '@splidejs/splide/css'
import { useEffect } from 'react'
import Link from "next/link"

const category = () => {
    useEffect(() => {
        const splide = new Splide( '#category', {
            height: 40,
            gap: 5,
            perPage: 10,
            pagination: false,
            padding: {
                left: 40,
                right: 40
            },
            breakpoints: {
                640: {
                    perPage: 3
                },

                1024: {
                    perPage: 7
                }
            }
        })

        splide.mount()
    })

    return <section className="splide w-full" aria-label="Splide Basic HTML Example" id='category'>
        <div className="splide__track">
            <div className="splide__list">
                {
                    Array.from({length: 30}).map((_, index) => <Link href={"/category/shose"} className="splide__slide badge" key={index}>Clothes</Link>)
                }
            </div>
        </div>
    </section>
}

export default category