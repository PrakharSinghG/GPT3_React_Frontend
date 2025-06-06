import { useState } from "react";
import "./App.css";
import { Article, Brand, Cta, Feature, Navbar } from "./components";
import {
  Footer,
  Blog,
  Possibility,
  WhatGPT3,
  Features,
  Header,
} from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />  
      <Footer />
    </div>
  );
}

export default App;
