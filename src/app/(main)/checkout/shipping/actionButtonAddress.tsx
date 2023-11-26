"use client"

import { Fragment } from 'react'
import { useDispatch } from "react-redux"
import { showModal } from '@/app/store/reducer/modalReducer'
import { useRouter } from 'next/navigation'

const actionButtonAddress = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    return <Fragment>
        <button className="btn btn-block rounded-full" onClick={() => router.push('/checkout/payment')}>Shipping here</button>
        <div className="mt-2 grid grid-cols-2 items-center gap-x-2">
            <button className="btn btn-sm rounded-full btn-ghost" onClick={() => dispatch(showModal("#edit-shipping-form"))}>Edit</button>
            <button className="btn btn-sm rounded-full btn-ghost">Delete</button>
        </div>
    </Fragment>
}

export default actionButtonAddress