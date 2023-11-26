"use client"

import { usePathname } from "next/navigation"

const steps = () => {
    const stepOrder = ['Shipping', 'Payment', 'Review']
    const stepOrderLowerCase: String[] = []
    const pathName = usePathname()
    const splitPath = pathName.split("/")
    const currentPage = splitPath[splitPath.length - 1]
    stepOrder.map(e => stepOrderLowerCase.push(e.toLocaleLowerCase()))


    return <ul className="steps w-full">
        {
            stepOrder.map((val, index) => <li className={`step ${stepOrderLowerCase.indexOf(currentPage) >= index ? 'step-primary' : null}`} key={index}>{ val }</li>)
        }
    </ul>
}

export default steps