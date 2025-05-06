
import React from "react";

interface QuizFeedbackProps {
  isCorrect: boolean;
  explanation: string;
  isLastQuestion: boolean;
  onNext: () => void;
}

// Style constants extracted from Quiz.tsx
const feedbackStyle: React.CSSProperties = {
  margin: "18px 0 8px 0",
  fontWeight: 700,
  fontSize: 18,
};

const nextBtnStyle: React.CSSProperties = {
  marginTop: 16,
  width: "100%",
  padding: "12px 0",
  borderRadius: 8,
  background: "#3763f4",
  color: "#fff",
  fontWeight: 700,
  fontSize: 18,
  border: "none",
  cursor: "pointer",
  letterSpacing: 0.5,
  boxShadow: "0 2px 8px #6be67222",
  transition: "background 0.2s",
};

const QuizFeedback: React.FC<QuizFeedbackProps> = ({ isCorrect, explanation, isLastQuestion, onNext }) => {
  return (
    <div>
      <div style={feedbackStyle}>
        {isCorrect ? (
          <span style={{ color: "#6be672" }}>Correct!</span>
        ) : (
          <span style={{ color: "#ff5f56" }}>Incorrect.</span>
        )}
      </div>
      <div style={{ color: "#bfcfff", marginBottom: 10 }}>{explanation}</div>
      
      <button style={nextBtnStyle} onClick={onNext}>
        {isLastQuestion ? "Show Results" : "Next"}
      </button>
    </div>
  );
};

export default QuizFeedback;
