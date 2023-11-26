import Image from "next/image"
import Link from "next/link"

const productCard = () => {
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
        <p className="font-semibold">2 QTY</p>
        <p className="font-semibold">Total Rp 4000.000</p>
    </div>
</Link>
}

export default productCard