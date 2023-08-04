import React from "react";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Shorten from "./components/Shorten";
import Stats from "./components/Stats";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

import classes from "./App.module.css";

function App() {
  return (
    <main className={classes.container}>
      <NavBar />
      <Hero />
      <Shorten />
      <Stats />
      <CallToAction />
      <Footer />
    </main>
  );
}

export default App;
