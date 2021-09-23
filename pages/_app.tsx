import type { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/react"
import "@fontsource/montserrat/400.css"
import "@fontsource/noto-sans/400.css"
import theme from "../app/common/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
