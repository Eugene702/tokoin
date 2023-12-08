import { Metadata } from 'next'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// SVG
import LogoSvg from '@/assets/svg/logo.svg'

export const metadata: Metadata = {
    title: 'Sign in user'
}

const ButtonSignInGoogle = dynamic(() => import('./buttonSignInGoogle'))

const page = () => {
    return <div className="w-full h-screen flex justify-center items-center">
        <div className="w-11/12 p-10 rounded-xl shadow-xl lg:w-4/12">
            <div className="flex justify-center w-full">
                <Image
                    src={LogoSvg}
                    width={60}
                    height={60}
                    alt='Logo TokoIn'
                    priority />
            </div>

            <h1 className='mt-2 font-semibold text-center text-xl'>Sign In User</h1>
            <ButtonSignInGoogle />
        </div>
    </div>
}

export default page