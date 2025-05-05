
import React from "react";

interface QuestionDisplayProps {
  question: string;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ question }) => {
  return (
    <div style={{ fontSize: 17, fontWeight: 500, margin: "16px 0 10px 0" }}>
      {question}
    </div>
  );
};

export default QuestionDisplay;
