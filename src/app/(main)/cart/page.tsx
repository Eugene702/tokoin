import { Metadata } from "next"
import dynamic from "next/dynamic"

export const metadata: Metadata = {
    title: "Cart"
}

const ProductList = dynamic(() => import('./productList'))
const ButtonCheckout = dynamic(() => import('./buttonCheckout'))

const page = () => {
    return <div className="w-11/12 mx-auto my-5 lg:w-6/12">
        <ProductList />
        <ButtonCheckout />
    </div>
}

export default page