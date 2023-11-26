import dynamic from "next/dynamic"

const ProductCard = dynamic(() => import('./productCard'))

const productList = () => {
    return <section className="flex flex-col gap-5">
        {
            Array.from({length: 10}).map((_, index) => <ProductCard key={index} />)
        }
    </section>
}

export default productList