"use client"

import { useDispatch } from "react-redux"
import { showModal } from '@/app/store/reducer/modalReducer'

const actionButtonAddress = () => {
    const dispatch = useDispatch()

    return <div className="mt-2 grid grid-cols-2 items-center gap-x-2">
        <button className="btn btn-sm rounded-full btn-ghost" onClick={() => dispatch(showModal("#edit-shipping-form"))}>Edit</button>
        <button className="btn btn-sm rounded-full btn-ghost">Delete</button>
    </div>
}

export default actionButtonAddress