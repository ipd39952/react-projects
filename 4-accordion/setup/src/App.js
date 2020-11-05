import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  return (
    <div className="container">
      <h3>questions and answers about login</h3>
      <section className="info">
        {data.map((item) => {
          return <SingleQuestion key={item.id} {...item} />;
        })}
      </section>
    </div>
  );
}

export default App;
