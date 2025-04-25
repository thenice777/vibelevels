import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Quiz from "../components/Quiz";

const Unit1Quiz: React.FC = () => {
  const { levelIdx } = useParams();
  const idx = parseInt(levelIdx || "0", 10);
  const navigate = useNavigate();

  return (
    <Quiz
      unitKey="unit1"
      quizType="level"
      index={idx}
      onComplete={(score: number, total: number) => {
        const percent = Math.round((score / total) * 100);
        // Update localStorage for level state
        const key = "unit1_level_state";
        const state = JSON.parse(localStorage.getItem(key) || "[]");
        if (state[idx]) {
          state[idx].score = percent;
          if (percent >= 80) {
            state[idx].completed = true;
            if (state[idx + 1]) state[idx + 1].unlocked = true;
          }
          localStorage.setItem(key, JSON.stringify(state));
        }
        navigate("/unit1");
      }}
    />
  );
};

export default Unit1Quiz;
