import { Metadata } from "next"
import dynamic from "next/dynamic"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Cart"
}

const ProductList = dynamic(() => import('./productList'))

const page = () => {
    return <div className="w-11/12 mx-auto my-5">
        <ProductList />
    </div>
}

export default page