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
import { Provider } from "react-redux"
import rootReducer from "./stores/rootReducer.ts"
import { configureStore} from "@reduxjs/toolkit"

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

const store = configureStore({
  reducer: rootReducer
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>

    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    </Provider>
  </React.StrictMode>
)
