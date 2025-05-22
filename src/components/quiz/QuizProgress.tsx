
import React from "react";

interface QuizProgressProps {
  currentQuestionIndex: number;
  totalQuestions: number;
}

// Style constants
const progressBarContainer: React.CSSProperties = {
  background: "var(--quiz-progress-bg, #32343c)",
  borderRadius: 6,
  height: 8,
  margin: "12px 0 24px 0",
  width: "100%",
  position: "relative",
  overflow: "hidden"
};

const progressBar = (percent: number): React.CSSProperties => ({
  background: "linear-gradient(90deg, var(--quiz-progress-start, #6be672), var(--quiz-progress-end, #54c8e8))",
  borderRadius: 6,
  height: "100%",
  width: `${percent}%`,
  transition: "width 0.4s cubic-bezier(0.17, 0.67, 0.83, 0.67)",
  position: "relative",
  zIndex: 2
});

// Style for progress info container
const progressInfoStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 8
};

// Style for question counter
const questionCounterStyle: React.CSSProperties = {
  fontSize: 14,
  color: "var(--quiz-counter, #bfcfff)",
  fontWeight: 500
};

// Style for percentage
const percentageStyle: React.CSSProperties = {
  fontSize: 14,
  color: "var(--quiz-percentage, #6be672)",
  fontWeight: 600
};

const QuizProgress: React.FC<QuizProgressProps> = ({ currentQuestionIndex, totalQuestions }) => {
  // Calculate progress percentage
  const progressPercent = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);

  return (
    <>
      <div style={progressInfoStyle}>
        <div style={questionCounterStyle}>
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </div>
        <div style={percentageStyle}>
          {progressPercent}% complete
        </div>
      </div>
      <div style={progressBarContainer}>
        <div style={progressBar(progressPercent)} />
      </div>
    </>
  );
};

export default QuizProgress;
