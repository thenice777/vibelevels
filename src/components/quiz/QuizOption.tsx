
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

// Style function for option buttons with enhanced visual feedback
const optionButton = (selected: boolean, correct: boolean, incorrect: boolean, disabled: boolean): React.CSSProperties => ({
  width: "100%",
  padding: "16px 20px",
  margin: "10px 0",
  borderRadius: 10,
  border: selected ? "2px solid var(--quiz-selected-border, #6be672)" : "2px solid var(--quiz-option-border, #32343c)",
  background: correct
    ? "var(--quiz-correct-bg, #224d2b)"
    : incorrect
    ? "var(--quiz-incorrect-bg, #5c2222)"
    : selected
    ? "var(--quiz-selected-bg, #2d3140)"
    : "var(--quiz-option-bg, #23242d)",
  color: correct 
    ? "var(--quiz-correct-text, #6be672)" 
    : incorrect 
    ? "var(--quiz-incorrect-text, #ff5f56)" 
    : "var(--quiz-option-text, #f1f1f1)",
  cursor: disabled ? "not-allowed" : "pointer",
  outline: "none",
  fontWeight: selected || correct ? 600 : 400,
  boxShadow: selected 
    ? "0 0 0 2px var(--quiz-selected-shadow, rgba(107, 230, 114, 0.3))" 
    : correct 
    ? "0 0 8px var(--quiz-correct-shadow, rgba(107, 230, 114, 0.3))"
    : incorrect 
    ? "0 0 8px var(--quiz-incorrect-shadow, rgba(255, 95, 86, 0.3))"
    : undefined,
  opacity: disabled && !correct && !incorrect ? 0.7 : 1,
  transition: "all 0.2s ease",
  fontSize: 16,
  textAlign: "left",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  overflow: "hidden"
});

// Style for option labels (A, B, C, D, etc.)
const optionLabelStyle: React.CSSProperties = {
  display: "inline-block",
  width: 24,
  height: 24,
  borderRadius: "50%",
  background: "rgba(255, 255, 255, 0.1)",
  marginRight: 10,
  textAlign: "center",
  lineHeight: "24px",
  fontSize: 14,
  fontWeight: "bold"
};

// Style for status indicators
const statusIndicatorStyle = (type: "correct" | "incorrect"): React.CSSProperties => ({
  width: 20,
  height: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  background: type === "correct" 
    ? "var(--quiz-correct-indicator-bg, rgba(107, 230, 114, 0.2))" 
    : "var(--quiz-incorrect-indicator-bg, rgba(255, 95, 86, 0.2))",
  color: type === "correct" 
    ? "var(--quiz-correct-text, #6be672)" 
    : "var(--quiz-incorrect-text, #ff5f56)",
  marginLeft: 10
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
  const optionLetters = ['A', 'B', 'C', 'D', 'E', 'F'];
  
  return (
    <button
      style={optionButton(isSelected, isCorrect, isIncorrect, isAnswerChecked)}
      onClick={() => onSelect(index)}
      disabled={isAnswerChecked}
      aria-pressed={isSelected}
    >
      <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
        <span style={optionLabelStyle}>{optionLetters[index]}</span>
        <span style={{ lineHeight: 1.5 }}>{option}</span>
      </div>
      
      {/* Status indicators */}
      {isCorrect && (
        <div style={statusIndicatorStyle("correct")}>
          ✓
        </div>
      )}
      {isIncorrect && (
        <div style={statusIndicatorStyle("incorrect")}>
          ✗
        </div>
      )}
    </button>
  );
};

export default QuizOption;
