
import React from "react";
import QuizProgress from "./QuizProgress";
import QuizOption from "./QuizOption";
import QuizFeedback from "./QuizFeedback";

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

const cardStyle: React.CSSProperties = {
  background: "var(--quiz-card-bg, #22242b)",
  borderRadius: 12,
  padding: 28,
  margin: "0 auto 24px auto",
  maxWidth: 580,
  boxShadow: "0 3px 12px rgba(0,0,0,0.25)",
  border: "1px solid rgba(255,255,255,0.05)",
  transition: "all 0.3s ease"
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
      <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 10, color: "var(--quiz-title, #f1f1f1)" }}>
        {title}
      </div>
      <QuizProgress 
        currentQuestionIndex={currentQuestionIndex} 
        totalQuestions={questions.length} 
      />
      <div style={{ 
        fontSize: 18, 
        fontWeight: 500, 
        margin: "18px 0 14px 0", 
        lineHeight: 1.5,
        color: "var(--quiz-question, #f1f1f1)"
      }}>
        {currentQuestion.question}
      </div>
      <div className="options-container" style={{ marginBottom: 20 }}>
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
      <div className="quiz-tips" style={{ 
        fontSize: 13, 
        color: "var(--quiz-tips, #8b8fa3)", 
        marginTop: isAnswerChecked ? 16 : 10,
        fontStyle: "italic",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        {isAnswerChecked ? 
          "Read the explanation carefully to enhance your understanding" : 
          "Select the best answer based on vibe coding best practices"
        }
      </div>
    </div>
  );
};

export default QuizCard;
