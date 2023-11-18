const loading = () => {
    return <div className="w-11/12 mx-auto my-5">
        <div className="flex flex-col gap-5">
            {
                Array.from({ length: 10 }).map((_, index) => <div className="card card-compact card-side bg-base-100 shadow-xl" key={index}>
                    <div className="w-[40%] h-28 skeleton"></div>
                    <div className="card-body max-w-[60%]">
                        <div className="w-full h-2 skeleton"></div>
                        <div className="w-11/12 h-2 skeleton"></div>
                        <div className="w-10/12 h-2 skeleton"></div>
                        <div className="flex gap-x-10">
                            <div className="w-7 h-7 skeleton rounded-md"></div>
                            <div className="w-7 h-7 skeleton rounded-md"></div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    </div>
}

export default loading