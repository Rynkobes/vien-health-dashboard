import * as React from "react"
import {
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react"
import Fonts from './Fonts'
import DashboardContainer from "./containers/DashboardContainer"

const theme = extendTheme({
  fonts: {
    heading: "Airbnb Cereal App",
    body: "Airbnb Cereal App"
  }
})

export const App = () => (
  <ChakraProvider theme={theme}>
    <Fonts />
    <DashboardContainer />
  </ChakraProvider>
)
