const page = () => {
    return <>
        <h1 className="text-2xl font-semibold">Choose a shipping address</h1>
        <div className="mt-5">
            <div className="form-control w-full">
                <label className="label cursor-pointer gap-x-5 items-start justify-start">
                    <input type="radio" name="radio-10" className="radio radio-lg" defaultChecked />
                    <span className="label-text">
                        <div className="badge">Default</div>
                        <p>Eugene Feilian Putra Rangga</p>
                        <p>JL. Batu Raya RT. 03/07 No. 04</p>
                        <p>JAKARTA SELATAN</p>
                        <p>Jakarta 12960</p>
                        <p>Indonesia</p>

                        <div className="mt-2">
                            <button className="btn btn-block rounded-full">Shipping here</button>
                            <div className="mt-2 grid grid-cols-2 items-center gap-x-2">
                                <button className="btn btn-sm rounded-full btn-ghost">Edit</button>
                                <button className="btn btn-sm rounded-full btn-ghost">Delete</button>
                            </div>
                        </div>
                    </span>
                </label>
            </div>

            <div className="divider"></div>
            <button className="btn btn-block rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                </svg>

                <span>Add new address</span>
            </button>
        </div>
    </>
}

export default page