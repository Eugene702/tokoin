import dynamic from "next/dynamic"

const Navbar = dynamic(() => import('@/components/navbar'))
const Footer = dynamic(() => import('@/components/footer'))

const layout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return <>
        <Navbar />
        { children }
        <Footer />
    </>
}

export default layout