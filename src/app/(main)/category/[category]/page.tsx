import dynamic from "next/dynamic"

const ProductList = dynamic(() => import('./productList'))

const page = () => {
    return <div className='w-11/12 mx-auto my-10'>
        <h1 className='text-xl font-bold'>Category Jewels</h1>
        <div className="mt-5">
            <ProductList />
        </div>

        <div className="join mt-10 justify-center w-full">
            <button className="join-item btn">1</button>
            <button className="join-item btn btn-active">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn">4</button>
        </div>
    </div>
}

export default page