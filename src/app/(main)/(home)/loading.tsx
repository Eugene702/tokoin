const loading = () => {
    return <>
        <div className="skeleton w-full h-64 rounded-none"></div>
        <div className="my-5 px-3 grid grid-cols-2 gap-2">
            {
                Array.from({ length: 10 }).map((_, index) => <div className="flex flex-col gap-4 w-full" key={index}>
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>)
            }
        </div>
    </>
}

export default loading