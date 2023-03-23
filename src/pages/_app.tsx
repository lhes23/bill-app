import "@/styles/globals.css"
import type { AppProps } from "next/app"

export const appDetails = {
  appName: "Billing App"
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
