const CartConfirmationModal = () => {
    return <dialog id="cart_confirmation_modal" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Success!</h3>
            <p className="py-4">Product added successfully!</p>
            <div className="modal-action">
                <form method="dialog">
                    <button className="btn">Close</button>
                </form>
            </div>
        </div>
    </dialog>
}

export default CartConfirmationModal