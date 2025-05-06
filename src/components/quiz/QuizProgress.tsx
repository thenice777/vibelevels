
import React from "react";

interface QuizProgressProps {
  currentQuestionIndex: number;
  totalQuestions: number;
}

// Style constants extracted from Quiz.tsx
const progressBarContainer: React.CSSProperties = {
  background: "#32343c",
  borderRadius: 6,
  height: 10,
  margin: "12px 0 24px 0",
  width: "100%",
};

const progressBar = (percent: number): React.CSSProperties => ({
  background: "#6be672",
  borderRadius: 6,
  height: "100%",
  width: `${percent}%`,
  transition: "width 0.3s",
});

const QuizProgress: React.FC<QuizProgressProps> = ({ currentQuestionIndex, totalQuestions }) => {
  // Calculate progress percentage
  const progressPercent = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);

  return (
    <>
      <div style={{ fontSize: 15, marginBottom: 4 }}>
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </div>
      <div style={progressBarContainer}>
        <div style={progressBar(progressPercent)} />
      </div>
    </>
  );
};

export default QuizProgress;
