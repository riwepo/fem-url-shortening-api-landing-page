import React from "react";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ShortenForm from "./components/ShortenForm";
import Stats from "./components/statistics/Stats";
import CallToAction from "./components/CallToAction";
import Footer from "./components/footer/Footer";

import classes from "./App.module.css";

function App() {
  return (
    <main className={classes.container}>
      <NavBar />
      <Hero />
      <ShortenForm />
      <Stats />
      <CallToAction />
      <Footer />
    </main>
  );
}

export default App;
