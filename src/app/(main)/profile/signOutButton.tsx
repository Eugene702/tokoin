"use client"

import { useDispatch } from "react-redux"
import { showModal } from '@/app/store/reducer/modalReducer'

const SignOutButton = () => {
    const dispatch = useDispatch()
    return <button className="btn btn-error text-white" onClick={() => dispatch(showModal("#sign-out-confirmation-modal"))}>Sign Out</button>
}
export default SignOutButton