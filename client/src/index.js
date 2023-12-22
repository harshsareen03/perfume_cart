import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProductPage from "./components/pages/ProductPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ProductDetail from "./components/pages/ProductDetail";
import store from "./store";
import { Provider } from "react-redux";
import CartScreen from "./components/pages/CartScreen";
import LoginScreen from "./components/pages/LoginScreen";
import Registerscreen from "./components/pages/Registerscreen";
import ShippingScreen from "./components/pages/ShippingScreen";
import PlaceOrderScreen from "./components/pages/PlaceOrderScreen";
import PaymentScreen from "./components/pages/PaymentScreen";
import PrivateRoute from "./components/PrivateRoute"; 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<ProductPage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path='/cart' element={<CartScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<Registerscreen />} />
      <Route path='' element={<PrivateRoute />}>
        <Route path='/shipping' element={<ShippingScreen />} />
        <Route path='/payment' element={<PaymentScreen />} />
        <Route path='/placeorder' element={<PlaceOrderScreen />} />
      </Route>

      
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
