"use client"

import { signOut } from 'next-auth/react'

const SignOutConfirmationModal = () => {
    return <dialog id="sign-out-confirmation-modal" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Sign Out!</h3>
            <p className="py-4">Are you sure you want to leave?</p>

            <div className="modal-action">
                <button className="btn btn-error text-white" onClick={() => signOut()}>Yes I am sure!</button>
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

export default SignOutConfirmationModal