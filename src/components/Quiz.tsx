import React, { useState, useMemo } from "react";
import quizData from "../assets/content/quizzes/vibe-coding-unit1.json";

interface QuizProps {
  unitKey?: string;
  quizType?: "level" | "challenge" | "advancedTopic";
  index?: number;
  onComplete?: (score: number, total: number) => void;
}

const darkTheme: React.CSSProperties = {
  background: "#181a20",
  color: "#f1f1f1",
  minHeight: "100vh",
  padding: 24,
  borderRadius: 12,
  fontFamily: 'Inter, system-ui, sans-serif',
};
const cardStyle: React.CSSProperties = {
  background: "#22242b",
  borderRadius: 10,
  padding: 24,
  margin: "0 auto 24px auto",
  maxWidth: 480,
  boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
};
const progressBarContainer: React.CSSProperties = {
  background: "#32343c",
  borderRadius: 6,
  height: 10,
  margin: "12px 0 24px 0",
  width: "100%",
};
const progressBar: (percent: number) => React.CSSProperties = (percent) => ({
  background: "#6be672",
  borderRadius: 6,
  height: "100%",
  width: `${percent}%`,
  transition: "width 0.3s",
});
const optionButton: (selected: boolean, correct: boolean, incorrect: boolean, disabled: boolean) => React.CSSProperties = (selected, correct, incorrect, disabled) => ({
  width: "100%",
  padding: "12px 16px",
  margin: "8px 0",
  borderRadius: 8,
  border: selected ? "2px solid #6be672" : "2px solid #32343c",
  background: correct
    ? "#224d2b"
    : incorrect
    ? "#5c2222"
    : selected
    ? "#2d3140"
    : "#23242d",
  color: correct ? "#6be672" : incorrect ? "#ff5f56" : "#f1f1f1",
  cursor: disabled ? "not-allowed" : "pointer",
  outline: "none",
  fontWeight: selected || correct ? 700 : 400,
  boxShadow: selected ? "0 0 0 2px #6be67255" : undefined,
  opacity: disabled && !correct && !incorrect ? 0.7 : 1,
  transition: "all 0.2s",
});
const checkBtnStyle: React.CSSProperties = {
  marginTop: 16,
  width: "100%",
  padding: "12px 0",
  borderRadius: 8,
  background: "#6be672",
  color: "#181a20",
  fontWeight: 700,
  fontSize: 18,
  border: "none",
  cursor: "pointer",
  letterSpacing: 0.5,
  boxShadow: "0 2px 8px #6be67222",
  transition: "background 0.2s",
};
const nextBtnStyle: React.CSSProperties = {
  ...checkBtnStyle,
  background: "#3763f4",
  color: "#fff",
};
const restartBtnStyle: React.CSSProperties = {
  ...checkBtnStyle,
  background: "#23242d",
  color: "#6be672",
  border: "2px solid #6be672",
};
const feedbackStyle: React.CSSProperties = {
  margin: "18px 0 8px 0",
  fontWeight: 700,
  fontSize: 18,
};

const Quiz: React.FC<QuizProps> = ({
  unitKey = "unit1",
  quizType = "level",
  index = 0,
  onComplete,
}) => {
  // Memoized quiz selection logic
  const quizSelection = useMemo(() => {
    // Defensive: check unit exists
    const unit = (quizData as any)[unitKey];
    if (!unit) return { error: "Unit not found.", title: "", questions: [] };

    if (quizType === "level") {
      if (!Array.isArray(unit.levels) || index < 0 || index >= unit.levels.length) {
        return { error: "Level index out of bounds.", title: "", questions: [] };
      }
      const level = unit.levels[index];
      if (!level.quiz || !Array.isArray(level.quiz.questions)) {
        return { error: "Quiz data not found for this level.", title: "", questions: [] };
      }
      return {
        error: "",
        title: level.quiz.title || level.title || "Quiz",
        questions: level.quiz.questions,
      };
    }
    if (quizType === "challenge") {
      if (!unit.challenge || !Array.isArray(unit.challenge.questions)) {
        return { error: "Challenge quiz not found.", title: "", questions: [] };
      }
      return {
        error: "",
        title: unit.challenge.title || "Challenge Quiz",
        questions: unit.challenge.questions,
      };
    }
    if (quizType === "advancedTopic") {
      if (!Array.isArray(unit.advancedTopics) || index < 0 || index >= unit.advancedTopics.length) {
        return { error: "Advanced topic index out of bounds.", title: "", questions: [] };
      }
      const adv = unit.advancedTopics[index];
      if (!adv.quiz || !Array.isArray(adv.quiz.questions)) {
        return { error: "Quiz data not found for this advanced topic.", title: "", questions: [] };
      }
      return {
        error: "",
        title: adv.quiz.title || adv.title || "Advanced Topic Quiz",
        questions: adv.quiz.questions,
      };
    }
    return { error: "Invalid quiz type.", title: "", questions: [] };
  }, [unitKey, quizType, index]);

  const { error, title, questions } = quizSelection;

  // State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Reset all state (for restart)
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswerIndex(null);
    setIsAnswerChecked(false);
    setIsCorrect(null);
    setScore(0);
    setShowResults(false);
  };

  if (error) {
    return (
      <div style={darkTheme}>
        <div style={{ ...cardStyle, border: "2px solid #ff5f56", color: "#ff5f56" }}>
          <strong>Error:</strong> {error}
        </div>
      </div>
    );
  }

  if (showResults) {
    const percent = questions.length ? Math.round((score / questions.length) * 100) : 0;
    return (
      <div style={darkTheme}>
        <div style={cardStyle}>
          <h2 style={{ marginBottom: 8 }}>{title}</h2>
          <div style={{ fontSize: 22, fontWeight: 700, margin: "12px 0" }}>
            Score: {score} / {questions.length}
          </div>
          <div style={{ fontSize: 18, marginBottom: 18 }}>({percent}%)</div>
          <button style={restartBtnStyle} onClick={resetQuiz}>
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentQuestionIndex];
  if (!q) {
    return (
      <div style={darkTheme}>
        <div style={{ ...cardStyle, border: "2px solid #ff5f56", color: "#ff5f56" }}>
          <strong>Error:</strong> Quiz questions not found.
        </div>
      </div>
    );
  }

  const handleOptionClick = (idx: number) => {
    if (isAnswerChecked) return;
    setSelectedAnswerIndex(idx);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswerIndex === null) return;
    const correct = selectedAnswerIndex === q.correctAnswer;
    setIsCorrect(correct);
    setIsAnswerChecked(true);
    if (correct) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setShowResults(true);
      if (typeof onComplete === "function") {
        onComplete(score, questions.length);
      }
    } else {
      setCurrentQuestionIndex((i) => i + 1);
      setSelectedAnswerIndex(null);
      setIsAnswerChecked(false);
      setIsCorrect(null);
    }
  };


  // Progress
  const progressPercent = Math.round(((currentQuestionIndex + 1) / questions.length) * 100);

  return (
    <div style={darkTheme}>
      <div style={cardStyle}>
        <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{title}</div>
        <div style={{ fontSize: 15, marginBottom: 4 }}>
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
        <div style={progressBarContainer}>
          <div style={progressBar(progressPercent)} />
        </div>
        <div style={{ fontSize: 17, fontWeight: 500, margin: "16px 0 10px 0" }}>{q.question}</div>
        <div>
          {q.options.map((opt: string, idx: number) => {
            const isSelected = selectedAnswerIndex === idx;
            const isCorrectOpt = isAnswerChecked && idx === q.correctAnswer;
            const isIncorrectOpt = isAnswerChecked && isSelected && idx !== q.correctAnswer;
            return (
              <button
                key={idx}
                style={optionButton(isSelected, isCorrectOpt, isIncorrectOpt, isAnswerChecked)}
                onClick={() => handleOptionClick(idx)}
                disabled={isAnswerChecked}
                aria-pressed={isSelected}
              >
                {opt}
              </button>
            );
          })}
        </div>
        {isAnswerChecked && (
          <div>
            <div style={feedbackStyle}>
              {isCorrect ? (
                <span style={{ color: "#6be672" }}>Correct!</span>
              ) : (
                <span style={{ color: "#ff5f56" }}>Incorrect.</span>
              )}
            </div>
            <div style={{ color: "#bfcfff", marginBottom: 10 }}>{q.explanation}</div>
          </div>
        )}
        {!isAnswerChecked ? (
          <button
            style={{
              ...checkBtnStyle,
              opacity: selectedAnswerIndex === null ? 0.6 : 1,
              cursor: selectedAnswerIndex === null ? "not-allowed" : "pointer",
            }}
            onClick={handleCheckAnswer}
            disabled={selectedAnswerIndex === null}
          >
            Check Answer
          </button>
        ) : (
          <button style={nextBtnStyle} onClick={handleNext}>
            {currentQuestionIndex === questions.length - 1 ? "Show Results" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
