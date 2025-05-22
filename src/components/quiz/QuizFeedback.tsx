
import React from "react";

interface QuizFeedbackProps {
  isCorrect: boolean;
  explanation: string;
  isLastQuestion: boolean;
  onNext: () => void;
}

// Style constants 
const feedbackStyle: React.CSSProperties = {
  margin: "18px 0 12px 0",
  fontWeight: 700,
  fontSize: 18,
};

const explanationStyle: React.CSSProperties = {
  color: "var(--quiz-explanation, #bfcfff)",
  marginBottom: 16, 
  lineHeight: 1.5,
  padding: "10px 14px",
  borderRadius: 8,
  background: "rgba(55, 99, 244, 0.1)",
  borderLeft: "3px solid rgba(107, 230, 114, 0.5)",
  fontSize: 15
};

const nextBtnStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 0",
  borderRadius: 8,
  background: "var(--quiz-next-btn, #3763f4)",
  color: "#fff",
  fontWeight: 700,
  fontSize: 16,
  border: "none",
  cursor: "pointer",
  letterSpacing: 0.5,
  boxShadow: "0 2px 8px rgba(55, 99, 244, 0.3)",
  transition: "all 0.2s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const QuizFeedback: React.FC<QuizFeedbackProps> = ({ isCorrect, explanation, isLastQuestion, onNext }) => {
  return (
    <div>
      <div style={feedbackStyle}>
        {isCorrect ? (
          <span style={{ color: "var(--quiz-correct, #6be672)" }}>✓ Correct!</span>
        ) : (
          <span style={{ color: "var(--quiz-incorrect, #ff5f56)" }}>✗ Incorrect</span>
        )}
      </div>
      <div style={explanationStyle}>
        <strong>Explanation: </strong>{explanation}
      </div>
      
      <button 
        style={nextBtnStyle} 
        onClick={onNext}
      >
        {isLastQuestion ? "Show Results" : "Next Question"}
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginLeft: 8 }}
        >
          <path 
            d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" 
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
};

export default QuizFeedback;
