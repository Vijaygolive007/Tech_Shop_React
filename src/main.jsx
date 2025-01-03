import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IconContext } from "react-icons";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "./components/Store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <IconContext.Provider value={{ color: "Red" }}>
          <App />
        </IconContext.Provider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
