import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Quiz from "../components/Quiz";
import { Layout } from "@/components/Layout";

const Unit1Quiz: React.FC = () => {
  const { levelIdx } = useParams();
  const idx = parseInt(levelIdx || "0", 10);
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-10">
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
      </div>
    </Layout>
  );
};

export default Unit1Quiz;
