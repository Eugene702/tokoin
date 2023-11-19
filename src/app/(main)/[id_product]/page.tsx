import { Metadata } from "next"
import dynamic from "next/dynamic"

export const metadata: Metadata = {
    title: "Product"
}

const ProductPhoto = dynamic(() => import('./productPhoto'))
const DetailProduct = dynamic(() => import('./detailProduct'))
const ReviewUsers = dynamic(() => import('./reviewUsers'))

const page = () => {
    return <>
        <ProductPhoto />
        <div className="my-5 w-11/12 mx-auto">
            <DetailProduct />
            <ReviewUsers />
        </div>
    </>
}

export default page