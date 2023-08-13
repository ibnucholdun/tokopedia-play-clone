import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";

import App from "./App.jsx";
import store from "./redux/store/index";

const theme = extendTheme({
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
