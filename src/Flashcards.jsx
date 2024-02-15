import { useState } from "react";
import { questions } from "./questions";

const Flashcards = () => {
  const [selected, setSelected] = useState(null);

  const handleClick = (id) => {
    setSelected(id !== selected ? id : null);
  };

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selected ? "selected" : ""}
        >
          <p>
            {question.id === selected ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Flashcards;
