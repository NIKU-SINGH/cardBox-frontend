import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import Navbar from '@/components/Navbar'
import store from '../redux/store'
import { Provider } from 'react-redux'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
      </Provider>

    </>

  )
}
