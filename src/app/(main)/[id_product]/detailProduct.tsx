import dynamic from "next/dynamic"

const TransactionButton = dynamic(() => import('./transactionButton'))

const detailProduct = () => {
    return <>
        <h1 className="text-xl font-bold">Rp 579,610</h1>
        <div className="rating rating-sm">
            <input type="radio" name="rating-1" readOnly className="mask mask-star" />
            <input type="radio" name="rating-1" readOnly className="mask mask-star" defaultChecked />
            <input type="radio" name="rating-1" readOnly className="mask mask-star" />
            <input type="radio" name="rating-1" readOnly className="mask mask-star" />
            <input type="radio" name="rating-1" readOnly className="mask mask-star" />
        </div>
        <p className="mt-2 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <TransactionButton />
        <h1 className="mt-3 font-bold">Description</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur velit, aperiam dignissimos facilis esse saepe non aliquid. Porro, incidunt! Explicabo eligendi architecto corrupti asperiores officia, vel labore fuga distinctio exercitationem?</p>
    </>
}

export default detailProduct