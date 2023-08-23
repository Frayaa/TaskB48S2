import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import {
  ChakraProvider,
  Colors,
  ThemeConfig,
  extendTheme,
} from "@chakra-ui/react"
import { Provider } from "react-redux"
import rootReducer from "./stores/rootReducer.ts"
import { configureStore } from "@reduxjs/toolkit"
import { BrowserRouter } from "react-router-dom"

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
  reducer: rootReducer,
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
)
