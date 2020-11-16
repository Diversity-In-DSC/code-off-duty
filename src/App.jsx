import React from "react";
import MatrixRain from "./sections/MatrixRain";
import Information from "./sections/Information";
import TracksPrizes from "./sections/TracksPrizes";
import Support from "./sections/Support";
import FAQ from "./sections/FAQ";
import CODFooter from "./sections/CODFooter";

class App extends React.Component {
  render() {
    return (
      <div style={{ fontFamily: "Content" }} className="text-center mt-5">
        <MatrixRain />
        <Information />
        <TracksPrizes />
        <Support />
        <FAQ />
        <CODFooter />
      </div>
    );
  }
}

export default App;
