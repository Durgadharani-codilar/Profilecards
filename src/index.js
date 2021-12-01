import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import UserCard from "./Components/userCards";
import Footer from "./Components/Footer";


import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <UserCard />
        <Footer />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);