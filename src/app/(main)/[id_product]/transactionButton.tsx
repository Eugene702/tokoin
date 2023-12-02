"use client"
import { showModal } from '@/app/store/reducer/modalReducer'
import { addProduct } from '@/app/store/reducer/cartReducer'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'

const TransactionButton = () => {
    const dispatch = useDispatch()
    const route = useRouter()

    const handleAddToCart = () => {
        dispatch(showModal("#cart_confirmation_modal"))
        dispatch(addProduct('1'))
    }

    return <div className="mt-5 grid grid-cols-1 gap-2 lg:grid-cols-2">
        <button className="btn btn-block btn-primary text-white rounded-full" onClick={() => route.push("/checkout")}>Buy now</button>
        <button className="btn btn-block btn-primary btn-outline text-white rounded-full" onClick={handleAddToCart}>Add to cart</button>
    </div>
}

export default TransactionButton