import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return <main className='container mt-5 -flex justify-content-center bg-light text-dark'>
    <h2>
      Questions And Answers About Login
    </h2>
    <div className='questionsContainer'>
      <h4>q1</h4>
      <h4>q2</h4>
      <h4>q3</h4>
    </div>
    </main>;
}

export default App;
