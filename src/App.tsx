import React from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <header className="home">
        <h1>Zoo</h1>
      </header>
      <main className="App">
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
