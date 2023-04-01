import { store } from "@/store"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"

export const appDetails = {
  appName: "Billing App"
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
