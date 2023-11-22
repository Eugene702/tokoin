"use client"
import { showModal } from './store/reducer/cartConfirmationModalReducer'
import { useDispatch } from 'react-redux'

const transactionButton = () => {
    const dispatch = useDispatch()

    return <div className="mt-5">
        <button className="btn btn-block btn-primary text-white rounded-full">Buy now</button>
        <button className="btn btn-block btn-primary btn-outline text-white rounded-full mt-2" onClick={() => dispatch(showModal())}>Add to cart</button>
    </div>
}

export default transactionButton