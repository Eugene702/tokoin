const shippingForm = () => {
    return <dialog id="shipping-form" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Sign Out!</h3>
            <p className="py-4">Are you sure you want to leave?</p>

            <div className="modal-action">
                <button className="btn btn-error text-white">Yes I am sure!</button>
                <form method="dialog">
                    <button className="btn">Cancel!</button>
                </form>
            </div>
        </div>
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
}

export default shippingForm