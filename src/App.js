import React, { useState } from "react";
import QuestionContainer from './QuestionContainer'

function App() {
  return (
    <main id='largerWrapper' className="shadow-lg p-5 container mt-5 border border-primary bg-light text-dark">

      <div id='questionsBox' >
        <h2>Questions And Answers About Login</h2>
      </div>

      <div id='questionsContainer' >
        <QuestionContainer key={Date.now.toString()}/>
      </div>

    </main>
  );
}

export default App;
