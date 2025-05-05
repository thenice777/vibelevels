
import React from "react";
import QuizProgress from "./QuizProgress";
import QuizOption from "./QuizOption";
import QuizFeedback from "./QuizFeedback";
import QuestionDisplay from "./QuestionDisplay";

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizCardProps {
  title: string;
  currentQuestionIndex: number;
  questions: Question[];
  selectedAnswerIndex: number | null;
  isAnswerChecked: boolean;
  isCorrect: boolean | null;
  onOptionClick: (idx: number) => void;
  onNext: () => void;
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

const QuizCard: React.FC<QuizCardProps> = ({
  title,
  currentQuestionIndex,
  questions,
  selectedAnswerIndex,
  isAnswerChecked,
  isCorrect,
  onOptionClick,
  onNext,
}) => {
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  if (!currentQuestion) {
    return (
      <div style={{ ...cardStyle, border: "2px solid #ff5f56", color: "#ff5f56" }}>
        <strong>Error:</strong> Quiz question not found.
      </div>
    );
  }

  return (
    <div style={cardStyle}>
      <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{title}</div>
      <QuizProgress 
        currentQuestionIndex={currentQuestionIndex} 
        totalQuestions={questions.length} 
      />
      <QuestionDisplay question={currentQuestion.question} />
      <div>
        {currentQuestion.options.map((opt, idx) => {
          const isSelected = selectedAnswerIndex === idx;
          const isCorrectOpt = isAnswerChecked && idx === currentQuestion.correctAnswer;
          const isIncorrectOpt = isAnswerChecked && isSelected && idx !== currentQuestion.correctAnswer;
          
          return (
            <QuizOption
              key={idx}
              option={opt}
              index={idx}
              isSelected={isSelected}
              isCorrect={isCorrectOpt}
              isIncorrect={isIncorrectOpt}
              isAnswerChecked={isAnswerChecked}
              onSelect={onOptionClick}
            />
          );
        })}
      </div>
      {isAnswerChecked && (
        <QuizFeedback
          isCorrect={isCorrect === true}
          explanation={currentQuestion.explanation}
          isLastQuestion={isLastQuestion}
          onNext={onNext}
        />
      )}
    </div>
  );
};

export default QuizCard;
