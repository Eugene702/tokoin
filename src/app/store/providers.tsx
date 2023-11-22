"use client"
import { Fragment, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '.'

const Providers = ({ children }: { children: ReactNode }) => {
    return <Fragment>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    </Fragment>
}

export default Providers