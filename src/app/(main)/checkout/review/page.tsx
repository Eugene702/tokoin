import dynamic from "next/dynamic"

const ProductCard = dynamic(() => import('./productCard'))
const CheckoutButton = dynamic(() => import('./checkoutButton'))

const page = () => {
    return <>
        <h1 className="text-2xl font-semibold">Review your order</h1>
        <div className="mt-5">
            <div className="flex flex-col gap-y-2">
                {
                    Array.from({ length: 2 }).map((_, index) => <ProductCard key={index} />)
                }
            </div>

            <div className="divider"></div>
            <div className="space-y-2">
                <p className="flex items-center justify-between">
                    <span className="text-lg font-semibold">Subtotal</span>
                    <span>Rp 8000.000</span>
                </p>
                <p className="flex items-center justify-between">
                    <span className="text-lg font-semibold">Shipping</span>
                    <span>Rp 200.000</span>
                </p>
                <p className="flex items-center justify-between">
                    <span className="text-lg font-semibold">Total</span>
                    <span>Rp 8.200.000</span>
                </p>

                <CheckoutButton />
            </div>
        </div>
    </>
}

export default page