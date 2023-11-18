import dynamic from "next/dynamic"

const ProductCardSide = dynamic(() => import('@/components/productCardSide'))

const productList = () => {
    return <section className="flex flex-col gap-5">
        {
            Array.from({length: 10}).map((_, index) => <ProductCardSide key={index} />)
        }
    </section>
}

export default productList