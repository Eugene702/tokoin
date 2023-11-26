import dynamic from "next/dynamic"

const AddShippingFormModal = dynamic(() => import('./addShippingFormModal'))
const EditShippingFormModal = dynamic(() => import('./editShippingFormModal'))
const ActionButtonAddress = dynamic(() => import('./actionButtonAddress'))
const ButtonAddNewAddress = dynamic(() => import('./buttonAddNewAddress'))

const page = () => {
    return <>
        <h1 className="text-2xl font-semibold">Choose a shipping address</h1>
        <div className="mt-5">
            <div className="form-control w-full">
                <label className="label cursor-pointer gap-x-5 items-start justify-start">
                    <input type="radio" name="radio-10" className="radio radio-lg" defaultChecked />
                    <span className="label-text">
                        <div className="badge">Default</div>
                        <p>Eugene Feilian Putra Rangga</p>
                        <p>JL. Batu Raya RT. 03/07 No. 04</p>
                        <p>JAKARTA SELATAN</p>
                        <p>Jakarta 12960</p>
                        <p>Indonesia</p>

                        <div className="mt-2">
                            <ActionButtonAddress />
                        </div>
                    </span>
                </label>
            </div>

            <div className="divider"></div>
            <ButtonAddNewAddress />
        </div>

        <AddShippingFormModal />
        <EditShippingFormModal />
    </>
}

export default page