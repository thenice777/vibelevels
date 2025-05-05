
import React from "react";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  title: string;
  onRestart: () => void;
}

// Style constants extracted from Quiz.tsx
const cardStyle: React.CSSProperties = {
  background: "#22242b",
  borderRadius: 10,
  padding: 24,
  margin: "0 auto 24px auto",
  maxWidth: 480,
  boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
};

const restartBtnStyle: React.CSSProperties = {
  marginTop: 16,
  width: "100%",
  padding: "12px 0",
  borderRadius: 8,
  background: "#23242d",
  color: "#6be672",
  border: "2px solid #6be672",
  fontWeight: 700,
  fontSize: 18,
  cursor: "pointer",
  letterSpacing: 0.5,
  boxShadow: "0 2px 8px #6be67222",
  transition: "background 0.2s",
};

const QuizResults: React.FC<QuizResultsProps> = ({ score, totalQuestions, title, onRestart }) => {
  const percent = totalQuestions ? Math.round((score / totalQuestions) * 100) : 0;

  return (
    <div style={cardStyle}>
      <h2 style={{ marginBottom: 8 }}>{title}</h2>
      <div style={{ fontSize: 22, fontWeight: 700, margin: "12px 0" }}>
        Score: {score} / {totalQuestions}
      </div>
      <div style={{ fontSize: 18, marginBottom: 18 }}>({percent}%)</div>
      <button style={restartBtnStyle} onClick={onRestart}>
        Restart Quiz
      </button>
    </div>
  );
};

export default QuizResults;
