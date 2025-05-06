
import React from "react";

interface QuizOptionProps {
  option: string;
  index: number;
  isSelected: boolean;
  isCorrect: boolean;
  isIncorrect: boolean;
  isAnswerChecked: boolean;
  onSelect: (index: number) => void;
}

// Style function extracted from Quiz.tsx
const optionButton = (selected: boolean, correct: boolean, incorrect: boolean, disabled: boolean): React.CSSProperties => ({
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

const QuizOption: React.FC<QuizOptionProps> = ({
  option,
  index,
  isSelected,
  isCorrect,
  isIncorrect,
  isAnswerChecked,
  onSelect
}) => {
  return (
    <button
      key={index}
      style={optionButton(isSelected, isCorrect, isIncorrect, isAnswerChecked)}
      onClick={() => onSelect(index)}
      disabled={isAnswerChecked}
      aria-pressed={isSelected}
    >
      {option}
    </button>
  );
};

export default QuizOption;
