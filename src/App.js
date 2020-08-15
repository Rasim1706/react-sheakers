import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Components/Header";
import Section from "./Components/Section";
import { DataProvider } from "./Components/Context";

function App() {
  return (
    <DataProvider>
      <div className="app">
        <Router>
          <Header />
          <Section />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
