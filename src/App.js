import React from "react";
import "./App.css";
// Supporting Components 
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />

      {/* App Body  */}
      <div className="app_body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
