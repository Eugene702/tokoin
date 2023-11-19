import Image from "next/image"
import Link from "next/link"

const productCardSide = () => {
    return <Link href="/2" className="card card-compact card-side bg-base-100 shadow-xl">
    <figure>
        <Image
            src="https://res.cloudinary.com/ddzlmw5rp/image/upload/v1678305628/samples/ecommerce/accessories-bag.jpg"
            alt="Movie"
            fill
            className="!relative !object-cover"
            sizes="100vw" />
    </figure>
    <div className="card-body max-w-[60%]">
        <h2 className="card-title line-clamp-1">Shoes!</h2>
        <p className="font-semibold">Rp 2000.000</p>
        <p className="line-clamp-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, ducimus veniam animi natus vitae amet esse veritatis illum exercitationem maxime voluptatum iure cumque, sapiente, a et. Sit omnis aspernatur similique.</p>
        <div className="join">
            <button className="btn join-item btn-xs">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                </svg>
            </button>
            <input type="text" className="input input-bordered w-8 input-xs join-item" />
            <button className="btn join-item btn-xs">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    </div>
</Link>
}

export default productCardSide