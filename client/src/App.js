import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <h1>welcome o perfunme-cart</h1>
        <Outlet />
      </main>
    </>
  );
};

export default App;
