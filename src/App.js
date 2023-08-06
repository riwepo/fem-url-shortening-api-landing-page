import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/footer/Footer";

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
