import { Fragment } from "react"
import { Metadata } from "next"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { getServerSession } from "next-auth/next"
import { Session } from "next-auth"

const getUser = async (): Promise<Session | null> => {
    const session = await getServerSession()
    return session
}

export const generateMetadata = async (): Promise<Metadata> => {
    const user = await getUser()

    return {
        title: user != null ? user.user != null ? user.user.name : "Profile User" : "Profile User"
    }
}

const SignOutButton = dynamic(() => import('./signOutButton'))
const SignOutConfirmationModal = dynamic(() => import('./signOutConfirmationModal'))

const page = async () => {
    const user = await getUser()
    
    if(user == null){
        return <div className="w-full h-screen flex justify-center items-center">
            <Link href="/auth/signin" className="btn btn-primary text-white rounded-xl">Login first!</Link>
        </div>
    }

    return <Fragment>
        <div className="w-10/12 mx-auto lg:w-6/12">
            <div className="flex items-center flex-col gap-y-2 w-full mt-5">
                <div className="avatar">
                    <div className="w-40 rounded-full">
                        <Image
                            src="https://res.cloudinary.com/ddzlmw5rp/image/upload/v1678305621/samples/people/smiling-man.jpg"
                            fill
                            alt="Photo Profile"
                            sizes="100vw"
                            className="!relative !object-cover" />
                    </div>
                </div>
                <h1 className="text-2xl text-center font-semibold">Eugene Feilian Putra Rangga</h1>
                <SignOutButton />
            </div>

            <div className="my-10">
                <h1 className="text-xl font-semibold">Transaction List</h1>
                <div className="space-y-5 mt-3">
                    {
                        Array.from({ length: 5 }).map((_, index) =>
                            <Link href="/2" className="card card-side bg-base-100 shadow-xl" key={index}>
                                <figure>
                                    <Image
                                        src="https://res.cloudinary.com/ddzlmw5rp/image/upload/v1678305621/samples/people/smiling-man.jpg"
                                        fill
                                        alt="Photo Profile"
                                        sizes="100vw"
                                        className="!relative !object-cover w-6/12" />
                                </figure>
                                <div className="card-body w-6/12">
                                    <h2 className="card-title">New movie is released!</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>

        <SignOutConfirmationModal />
    </Fragment>
}

export default page