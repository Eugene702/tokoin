import ProductCard from "@/components/productCard"

const productList = () => {
    return <div className="grid grid-cols-2 gap-2">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
}

export default productList