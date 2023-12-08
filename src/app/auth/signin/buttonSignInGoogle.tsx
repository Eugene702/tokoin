"use client"

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import GoogleSvg from '@/assets/svg/google-color.svg'

const buttonSignInGoogle = () => {
    return <button className='btn btn-block bg-white border rounded-box mt-5 gap-x-4' onClick={() => signIn("google", {redirect: true, callbackUrl: '/'})}>
        <Image
            src={GoogleSvg}
            width={30}
            height={30}
            alt='Google Icon'
            loading='lazy' />

        <span>Signin with Google</span>
    </button>
}

export default buttonSignInGoogle