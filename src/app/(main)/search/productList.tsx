import ProductCard from "@/components/productCard"

const productList = () => {
    return <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {
            Array.from({length: 10}).map((_, index) => <ProductCard />)
        }
    </div>
}

export default productList