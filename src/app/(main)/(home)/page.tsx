import dynamic from "next/dynamic"

const BannerRecommendation = dynamic(() => import('./bannerRecommendation'))
const Category = dynamic(() => import('./category'))
const ProductList = dynamic(() => import('./productList'))

const page = async () => {
  return (
    <main>
      <div className="rounded-b-xl overflow-clip">
        <BannerRecommendation />
      </div>

      <div className="w-full md:w-10/12 md:mx-auto">
        <div className="mt-5">
          <Category />
        </div>

        <div className="my-5 px-3">
          <ProductList />
        </div>
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