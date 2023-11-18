import BannerRecommendation from "./bannerRecommendation"
import ProductList from "./productList"

const page = () => {
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