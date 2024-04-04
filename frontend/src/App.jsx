import { Outlet } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [user, setUser] = useState();

  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Outlet context={{ user, setUser }} />
      </main>
    </>
  );
}

export default App;
