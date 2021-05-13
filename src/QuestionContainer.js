import React from "react";
import SingleQuestion from "./Question";
import data from "./data";

export default function QuestionContainer() {
  console.log(data);
  return data.map((question) => {
    return (
      <div>
        <SingleQuestion key={question.id} {...question} />
      </div>
    );
  });
}
