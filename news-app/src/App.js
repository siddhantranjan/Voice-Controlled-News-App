import React from "react";
import "./App.css";
import ShowApi from "./components/fetchApi";


const App = () => {
    return (
      <html >
        <header className="App">
          <h1>News API</h1>
        </header>
        <div>
          <ShowApi />
        </div>
      </html>
    );
}

export default App;
