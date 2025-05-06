
import React, { useState, useMemo } from "react";
import quizData from "../../assets/content/quizzes/vibe-coding-unit1.json";
import QuizCard from "./QuizCard";
import QuizResults from "./QuizResults";

interface QuizProps {
  unitKey?: string;
  quizType?: "level" | "challenge" | "advancedTopic";
  index?: number;
  onComplete?: (score: number, total: number) => void;
}

// Style constant extracted from the original Quiz.tsx
const darkTheme: React.CSSProperties = {
  background: "#181a20",
  color: "#f1f1f1",
  minHeight: "100vh",
  padding: 24,
  borderRadius: 12,
  fontFamily: 'Inter, system-ui, sans-serif',
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
        <div style={{ 
          background: "#22242b",
          borderRadius: 10,
          padding: 24,
          margin: "0 auto 24px auto",
          maxWidth: 480,
          boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
          border: "2px solid #ff5f56", 
          color: "#ff5f56" 
        }}>
          <strong>Error:</strong> {error}
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div style={darkTheme}>
        <QuizResults 
          score={score}
          totalQuestions={questions.length}
          title={title}
          onRestart={resetQuiz}
        />
      </div>
    );
  }

  const handleOptionClick = (idx: number) => {
    // Don't allow changing answer after selection
    if (isAnswerChecked) return;
    
    // Set the selected answer
    setSelectedAnswerIndex(idx);
    
    // Immediately check if it's correct
    const correct = idx === questions[currentQuestionIndex].correctAnswer;
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

  return (
    <div style={darkTheme}>
      <QuizCard 
        title={title}
        currentQuestionIndex={currentQuestionIndex}
        questions={questions}
        selectedAnswerIndex={selectedAnswerIndex}
        isAnswerChecked={isAnswerChecked}
        isCorrect={isCorrect}
        onOptionClick={handleOptionClick}
        onNext={handleNext}
      />
    </div>
  );
};

export default Quiz;
