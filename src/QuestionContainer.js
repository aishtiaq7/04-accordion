import React from "react";
import SingleQuestion from "./Question";
import data from "./data";

export default function QuestionContainer() {
  return data.map((question) => {
    return (
      <div>
        <SingleQuestion key={question.id.toString} {...question} />
      </div>
    );
  });
}
