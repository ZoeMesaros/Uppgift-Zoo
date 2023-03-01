import React from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";
import Animals from "./components/FetchData";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <header>
        <Nav></Nav>
      </header>
      <main className="App">
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
