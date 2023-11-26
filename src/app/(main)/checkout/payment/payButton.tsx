"use client"

import { useRouter } from "next/navigation"

const payButton = () => {
    const router = useRouter()
    return <button className="btn btn-primary rounded-full text-white btn-block" onClick={() => router.push("/checkout/review")}>Review your order</button>
}

export default payButton