"use client"

const transactionButton = () => {
    const handleCartButton = () => {
        const modal: Element | null = document.querySelector("#cart_confirmation_modal")
    }

    return <div className="mt-5">
        <button className="btn btn-block btn-primary text-white rounded-full">Buy now</button>
        <button className="btn btn-block btn-primary btn-outline text-white rounded-full mt-2" onClick={handleCartButton}>Add to cart</button>
    </div>
}

export default transactionButton