import dynamic from "next/dynamic"
import Link from "next/link"

const BannerRecommendation = dynamic(() => import('./bannerRecommendation'))
const ProductList = dynamic(() => import('./productList'))

const page = async () => {
  return (
    <main>
      <BannerRecommendation />

      <div className="mt-5">
        <div className="carousel w-full gap-x-2">
          {
            Array.from({ length: 10 }).map((_, index) => <div className="carousel-item">
              <Link href="/category/shose" className={`btn rounded-full ${index == 0 ? 'ml-5' : index == 9 ? 'mr-5' : null}`} key={index}>
                <span>Clothes</span>
              </Link>
            </div>)
          }
        </div>
      </div>

      <div className="my-5 px-3">
        <ProductList />
      </div>

      <div className="join my-5 justify-center w-full">
        <button className="join-item btn">1</button>
        <button className="join-item btn btn-active">2</button>
        <button className="join-item btn">3</button>
        <button className="join-item btn">4</button>
      </div>
    </main>
  )
}

export default page