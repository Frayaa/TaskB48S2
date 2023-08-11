import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import {
  ChakraProvider,
  Colors,
  Theme,
  ThemeConfig,
  extendBaseTheme,
  extendTheme,
} from "@chakra-ui/react"

const color: Colors = {
  brand: {
    grey: "#878787",
    green: "#04A51E",
  },
}

const config: ThemeConfig = {
  initialColorMode: "dark",
}

const theme = extendTheme({ color, config })

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
