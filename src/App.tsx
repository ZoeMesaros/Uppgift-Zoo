import React from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";
import FetchAPI from "./components/FetchData";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <header>
        <Nav></Nav>
      </header>
      <main className="App">
        <FetchAPI />
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
