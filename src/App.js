import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import {Route, Routes} from "react-router";
import Second from "./pages/Second";
import Third from "./pages/Third";
import Fourth from "./pages/Fourth";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/second" element={<Second/>}/>
            <Route path="/third" element={<Third/>}/>
            <Route path="/fourth" element={<Fourth/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
