const loading = () => {
    return <div className="w-11/12 mx-auto my-5">
        <div className="join w-full justify-center items-center gap-x-2 px-2">
            <div className="h-12 w-full skeleton"></div>
            <div className="h-12 w-16 skeleton"></div>
        </div>

        <div className="grid grid-cols-2 gap-2">
            {
                Array.from({ length: 10 }).map((_, index) => <div className="flex flex-col gap-4 w-full" key={index}>
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>)
            }
        </div>
    </div>
}

export default loading