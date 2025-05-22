
import React from "react";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  title: string;
  onRestart: () => void;
}

// Style constants
const cardStyle: React.CSSProperties = {
  background: "var(--quiz-card-bg, #22242b)",
  borderRadius: 12,
  padding: 30,
  margin: "0 auto 24px auto",
  maxWidth: 580,
  boxShadow: "0 3px 12px rgba(0,0,0,0.25)",
  border: "1px solid rgba(255,255,255,0.05)",
};

const restartBtnStyle: React.CSSProperties = {
  marginTop: 28,
  width: "100%",
  padding: "14px 0",
  borderRadius: 8,
  background: "var(--quiz-restart-btn-bg, #23242d)",
  color: "var(--quiz-restart-btn-text, #6be672)",
  border: "2px solid var(--quiz-restart-btn-border, #6be672)",
  fontWeight: 700,
  fontSize: 16,
  cursor: "pointer",
  letterSpacing: 0.5,
  boxShadow: "0 2px 8px rgba(107, 230, 114, 0.2)",
  transition: "all 0.2s ease",
};

const feedbackMessages = [
  { min: 0, max: 59, message: "Keep practicing! Review the material and try again.", emoji: "📚" },
  { min: 60, max: 79, message: "Good job! You're on the right track.", emoji: "👍" },
  { min: 80, max: 99, message: "Great work! You have a solid understanding of vibe coding principles.", emoji: "🎯" },
  { min: 100, max: 100, message: "Perfect score! You've mastered these vibe coding concepts!", emoji: "🏆" }
];

const QuizResults: React.FC<QuizResultsProps> = ({ score, totalQuestions, title, onRestart }) => {
  const percent = totalQuestions ? Math.round((score / totalQuestions) * 100) : 0;
  
  // Find appropriate feedback
  const feedback = feedbackMessages.find(f => percent >= f.min && percent <= f.max) || feedbackMessages[0];

  // Determine score color
  const getScoreColor = () => {
    if (percent < 60) return "#ff5f56";
    if (percent < 80) return "#ffb347";
    if (percent < 100) return "#6be672";
    return "#ffdd40";
  };

  return (
    <div style={cardStyle}>
      <h2 style={{ 
        marginBottom: 16, 
        fontSize: 22,
        color: "var(--quiz-title, #f1f1f1)"
      }}>{title}</h2>
      
      <div style={{
        background: "rgba(107, 230, 114, 0.1)",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        marginBottom: 20
      }}>
        <div style={{ fontSize: 42, fontWeight: 700, margin: "10px 0", color: getScoreColor() }}>
          {percent}%
        </div>
        <div style={{ fontSize: 18, margin: "8px 0", color: "var(--quiz-score-text, #f1f1f1)" }}>
          <span style={{ fontSize: 32, marginRight: 10 }}>{feedback.emoji}</span>
          {feedback.message}
        </div>
        <div style={{ fontSize: 16, marginTop: 15, color: "var(--quiz-score-details, #bfcfff)" }}>
          You scored: {score} out of {totalQuestions} correct
        </div>
      </div>
      
      <div style={{ marginTop: 20, textAlign: "center" }}>
        <h3 style={{ color: "var(--quiz-results-heading, #6be672)", marginBottom: 10 }}>Next Steps</h3>
        <ul style={{ 
          textAlign: "left", 
          paddingLeft: 20, 
          color: "var(--quiz-results-text, #f1f1f1)",
          lineHeight: 1.6
        }}>
          <li>Review the explanations for any questions you missed</li>
          <li>Check out related resources in the course material</li>
          <li>Apply these concepts in your next vibe coding project</li>
        </ul>
      </div>
      
      <button 
        style={restartBtnStyle} 
        onClick={onRestart}
      >
        Take Quiz Again
      </button>
    </div>
  );
};

export default QuizResults;
