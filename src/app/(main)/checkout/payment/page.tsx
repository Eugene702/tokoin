import dynamic from "next/dynamic"

const PayButton = dynamic(() => import('./payButton'))

const page = () => {
    return <>
        <h1 className="text-2xl font-semibold">Coose a payment method</h1>
        <div className="mt-5">
            <div className="form-control w-full">
                <label className="label cursor-pointer gap-x-5 items-center justify-start btn btn-ghost">
                    <input type="radio" name="radio-10" className="radio radio-lg" defaultChecked />
                    <span className="label-text">Google Pay</span>
                </label>
            </div>

            <div className="form-control w-full">
                <label className="label cursor-pointer gap-x-5 items-center justify-start btn btn-ghost">
                    <input type="radio" name="radio-10" className="radio radio-lg" defaultChecked />
                    <span className="label-text">Dana</span>
                </label>
            </div>

            <div className="form-control w-full">
                <label className="label cursor-pointer gap-x-5 items-center justify-start btn btn-ghost">
                    <input type="radio" name="radio-10" className="radio radio-lg" defaultChecked />
                    <span className="label-text">Paypal</span>
                </label>
            </div>

            <div className="mt-3">
                <PayButton />
            </div>
        </div>
    </>
}

export default page