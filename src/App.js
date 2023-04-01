import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Nav from "./components/nav";
import Modes from "./components/modes";
import Reg from "./components/reg";
import Parent from "./components/task/Parent";

function App() {
  return (
    <div className="app">
     <Nav/>
     <Modes/>
     <Reg/>
     <Parent/>
    </div>
  );
}

export default App;
