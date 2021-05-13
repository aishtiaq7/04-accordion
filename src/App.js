import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <main id='largerWrapper' className="shadow-lg p-5 container mt-5 border border-primary bg-light text-dark">

      <div id='questionsBox' className='border border-secondary'>
        <h2>Questions And Answers About Login</h2>
      </div>

      <div id='questionsContainer' className="border border-secondary">
        <h4>q1</h4>
        <h4>q2</h4>
        <h4>q3</h4>
      </div>

    </main>
  );
}

export default App;
