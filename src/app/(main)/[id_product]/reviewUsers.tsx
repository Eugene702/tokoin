import Image from "next/image"

const reviewUsers = () => {
    return <>
        <h1 className="mt-3 font-bold">Comments</h1>
        <form className="flex gap-x-2 mt-3">
            <div className="form-control w-full">
                <textarea className="textarea textarea-bordered" rows={4} placeholder="Enter your comments about this product"></textarea>
            </div>

            <button type="submit" className="btn btn-circle btn-primary text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
            </button>
        </form>

        <div className="mt-5">
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <Image
                            alt="Tailwind CSS chat bubble component"
                            src="https://res.cloudinary.com/ddzlmw5rp/image/upload/v1678305621/samples/people/smiling-man.jpg"
                            width={100}
                            height={100} />
                    </div>
                </div>
                <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
            </div>
        </div>
    </>
}

export default reviewUsers