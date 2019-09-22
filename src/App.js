import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HopList from "./HopList.json";

const Hops = ({ name, description, countryOfOrigin }) => {
  return (
    <section>
      <h2>
        Name: <i>{name}</i>
      </h2>
      <p>Description: {description}</p>
      <p>Country of Origin: {countryOfOrigin}</p>
    </section>
  );
};

function App({ hops = { HopList } }) {
  return (
    <div className="App">
      <h1>Hops</h1>
      {hops.map(hop => (
        <Hops
          name={hop.name}
          description={hop.description}
          countryOfOrigin={hop.countryOfOrigin}
        />
      ))}
    </div>
  );
}

export default App;
