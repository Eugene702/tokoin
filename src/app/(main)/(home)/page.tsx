import dynamic from "next/dynamic"

const BannerRecommendation = dynamic(() => import('./bannerRecommendation'))
const ProductList = dynamic(() => import('./productList'))

const page = async () => {
  return (
    <main>
      <BannerRecommendation />

      <div className="my-5 px-3">
        <ProductList />
      </div>
    </main>
  )
}

export default page