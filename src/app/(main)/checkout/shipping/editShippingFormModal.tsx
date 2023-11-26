const editShippingFormModal = () => {
    return <dialog id="edit-shipping-form" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Enter your address</h3>

            <form className="grid grid-cols-1 gap-2">
                <div className="form-control">
                    <label htmlFor="country">
                        <span className="label-text">Country</span>
                    </label>

                    <input type="text" className="input input-bordered" placeholder="Country" id="country" />
                </div>

                <div className="form-control">
                    <label htmlFor="full-name">
                        <span className="label-text">Full name</span>
                    </label>

                    <input type="text" className="input input-bordered" placeholder="Full name" id="full-name" />
                </div>

                <div className="form-control">
                    <label htmlFor="city">
                        <span className="label-text">City</span>
                    </label>

                    <input type="text" className="input input-bordered" placeholder="City" id="city" />
                </div>

                <div className="form-control">
                    <label htmlFor="province">
                        <span className="label-text">Province</span>
                    </label>

                    <input type="text" className="input input-bordered" placeholder="Province" id="province" />
                </div>

                <div className="form-control">
                    <label htmlFor="postal">
                        <span className="label-text">Postal code</span>
                    </label>

                    <input type="text" className="input input-bordered" placeholder="Postal code" id="postal" />
                </div>

                <div className="form-control w-fit">
                    <label className="label cursor-pointer gap-x-2">
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <span className="label-text">Set as default</span>
                    </label>
                </div>

                <div className="mt-2">
                    <button type="submit" className="btn btn-primary rounded-full btn-block text-white">Edit address</button>
                    <form method="dialog">
                        <button type="submit" className="btn btn-ghost rounded-full btn-block">Cancel</button>
                    </form>
                </div>
            </form>
        </div>
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
}

export default editShippingFormModal