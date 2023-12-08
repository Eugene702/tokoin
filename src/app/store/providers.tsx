"use client"

import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '.'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'

const Providers = ({ children, session }: { children: ReactNode, session: Session }) => {
    return <SessionProvider session={session}>
        <Provider store={store}>
            {children}
        </Provider>
    </SessionProvider>
}

export default Providers