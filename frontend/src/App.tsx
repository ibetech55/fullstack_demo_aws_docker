import React from "react";
import "./App.css";
import { SiteRoutes } from "./Routes";
import { QuotesProvider } from "./Services/Quote/QuotesProvider";

function App() {
  return (
    <div className="App">
      <QuotesProvider>
        <SiteRoutes />
      </QuotesProvider>
    </div>
  );
}

export default App;
