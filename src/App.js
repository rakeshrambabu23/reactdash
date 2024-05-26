import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <div>
        <div className="header" >
            <Header/>
        </div>
        <div className="home">
            <Home />
        </div>
    </div>
  );
}

export default App;