import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

const Steps = dynamic(() => import('./steps'))

const layout = ({
    children
}: {
    children: ReactNode
}) => {
    return <div className="w-11/12 mx-auto my-5">
        <Steps />
        <div className="mt-5">
            { children }
        </div>
    </div>
}

export default layout