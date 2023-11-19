import { Metadata } from "next"
import dynamic from "next/dynamic"

export const metadata: Metadata = {
    title: 'Search'
}

const SearchForm = dynamic(() => import('./searchForm'))
const ProductList = dynamic(() => import('./productList'))

const page = () => {
    return <main className="w-11/12 mx-auto my-5">
        <SearchForm />

        <div className="mt-5">
            <ProductList />
        </div>
    </main>
}

export default page