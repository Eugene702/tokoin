"use client"
import { showModal } from './reducer/cartConfirmationModalReducer'
import { addProduct } from '@/app/store/reducer/cartReducer'
import { useDispatch } from 'react-redux'

const TransactionButton = () => {
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(showModal())
        dispatch(addProduct('1'))
    }

    return <div className="mt-5">
        <button className="btn btn-block btn-primary text-white rounded-full">Buy now</button>
        <button className="btn btn-block btn-primary btn-outline text-white rounded-full mt-2" onClick={handleAddToCart}>Add to cart</button>
    </div>
}

export default TransactionButton