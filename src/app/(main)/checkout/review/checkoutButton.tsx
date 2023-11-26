"use client"

import { useRouter } from "next/navigation"

const checkoutButton = () => {
    const router = useRouter()
    return <button className="btn btn-block btn-primary text-white rounded-full" onClick={() => router.push('/')}>Checkout</button>
}

export default checkoutButton