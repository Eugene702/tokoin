const loading = () => {
    return <>
        <div className="w-full rounded-none skeleton h-64"></div>
        <div className="my-5 w-11/12 mx-auto space-y-2">
            <div className="h-4 w-44 skeleton"></div>
            <div className="h-4 w-full skeleton"></div>
            <div className="h-4 w-44 skeleton"></div>

            <div className="mt-5">
                <div className="h-10 w-full skeleton"></div>
                <div className="h-10 w-full skeleton mt-2"></div>
            </div>

            <div className="mt-5 space-y-2">
                <div className="h-4 w-44 skeleton"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>

            <div className="mt-5 space-y-3">
                {
                    Array.from({ length: 5 }).map((_, index) => <div className="flex gap-4 items-center" key={index}>
                        <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                        <div className="flex flex-col gap-4">
                            <div className="skeleton h-4 w-20"></div>
                            <div className="skeleton h-4 w-28"></div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </>
}

export default loading