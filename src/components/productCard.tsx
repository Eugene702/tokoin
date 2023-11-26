import Image from "next/image"
import Link from "next/link"

const productCard = () => {
    return <Link href="/2" className="card w-full bg-base-100 shadow-xl card-compact">
        <figure>
            <Image
                src="https://res.cloudinary.com/ddzlmw5rp/image/upload/v1678305628/samples/ecommerce/accessories-bag.jpg"
                alt="Shoes"
                sizes="100vw"
                fill
                className="!relative !object-cover" />
        </figure>
        <div className="card-body">
            <h2 className="card-title line-clamp-1">Shoes!</h2>
            <p className="font-semibold">Rp 2000.000</p>
            <p className="line-clamp-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, ducimus veniam animi natus vitae amet esse veritatis illum exercitationem maxime voluptatum iure cumque, sapiente, a et. Sit omnis aspernatur similique.</p>
        </div>
    </Link>
}

export default productCard