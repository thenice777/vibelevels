
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

// Style constants
const quizContainerStyle: React.CSSProperties = {
  color: "#f1f1f1",
  padding: 24,
  borderRadius: 12,
  fontFamily: 'Inter, system-ui, sans-serif',
  maxWidth: 720,
  margin: "0 auto"
};

const educationalTips = [
  "Take time to understand why the correct answer is right, not just which answer is correct.",
  "Knowledge isn't just about memorization—apply these concepts in your projects.",
  "If you're unsure about a question, try eliminating obviously incorrect options first.",
  "Remember: practical experience reinforces what you learn in quizzes.",
  "Always review explanations, even for questions you got right."
];

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
  const [startTime] = useState<Date>(new Date());
  const [tipIndex] = useState<number>(Math.floor(Math.random() * educationalTips.length));

  // Reset all state (for restart)
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswerIndex(null);
    setIsAnswerChecked(false);
    setIsCorrect(null);
    setScore(0);
    setShowResults(false);
  };

  const handleComplete = (finalScore: number) => {
    const endTime = new Date();
    const timeTaken = Math.round((endTime.getTime() - startTime.getTime()) / 1000);
    
    console.log(`Quiz completed in ${timeTaken} seconds with score: ${finalScore}/${questions.length}`);
    
    if (typeof onComplete === "function") {
      onComplete(finalScore, questions.length);
    }
  };

  if (error) {
    return (
      <div style={quizContainerStyle}>
        <div style={{ 
          background: "#22242b",
          borderRadius: 10,
          padding: 24,
          margin: "0 auto",
          maxWidth: 580,
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
      <div style={quizContainerStyle}>
        <QuizResults 
          score={score}
          totalQuestions={questions.length}
          title={title}
          onRestart={resetQuiz}
        />
        
        <div style={{
          marginTop: 24,
          padding: 16,
          borderRadius: 8,
          background: "rgba(55, 99, 244, 0.1)",
          border: "1px solid rgba(55, 99, 244, 0.2)",
          fontSize: 15,
          color: "#bfcfff",
          textAlign: "center",
          fontStyle: "italic"
        }}>
          <span style={{ fontWeight: 600 }}>Education Tip:</span> {educationalTips[tipIndex]}
        </div>
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
      handleComplete(score + (isCorrect ? 1 : 0));
    } else {
      setCurrentQuestionIndex((i) => i + 1);
      setSelectedAnswerIndex(null);
      setIsAnswerChecked(false);
      setIsCorrect(null);
    }
  };

  return (
    <div style={quizContainerStyle}>
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
