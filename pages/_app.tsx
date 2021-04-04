import type { AppProps } from 'next/app'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import LayoutWrapper from '../layouts/LayoutWrapper'
import {
  DispatchAction,
  InitialState,
  rootReducer
} from '../store/root-reducer'
import '../styles/App.less'
import '../styles/globals.less'
import reportWebVitals from '../utils/reportWebVitals'

const store = createStore<InitialState, DispatchAction, null, null>(
  rootReducer,
  composeWithDevTools()
)

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    reportWebVitals(console.log)
  }, [])
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Head>
          <title key='title'>CGCW</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </Provider>
    </React.StrictMode>
  )
}

export default MyApp
