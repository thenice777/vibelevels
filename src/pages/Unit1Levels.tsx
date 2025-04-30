import React, { useEffect, useState } from "react";
import quizData from "../assets/content/quizzes/vibe-coding-unit1.json";
import { Layout } from "@/components/Layout";
import { useNavigate } from "react-router-dom";

interface LevelState {
  completed: boolean;
  unlocked: boolean;
  score: number | null;
}

const LOCAL_KEY = "unit1_level_state";

const getInitialLevelState = (numLevels: number): LevelState[] => {
  const saved = localStorage.getItem(LOCAL_KEY);
  if (saved) return JSON.parse(saved);
  return Array.from({ length: numLevels }, (_, i) => ({
    completed: false,
    unlocked: i === 0,
    score: null,
  }));
};

const saveLevelState = (state: LevelState[]) => {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(state));
};

const Unit1Levels: React.FC = () => {
  const navigate = useNavigate();
  const levels = (quizData as any).unit1.levels || [];
  const [levelState, setLevelState] = useState<LevelState[]>(() => getInitialLevelState(levels.length));

  useEffect(() => {
    saveLevelState(levelState);
  }, [levelState]);

  const handleStartQuiz = (idx: number) => {
    navigate(`/unit1/quiz/${idx}`);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Unit 1: {quizData.unit1.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {levels.map((level: any, idx: number) => {
            const state = levelState[idx];
            let status = "Locked";
            if (state.unlocked && !state.completed) status = "Unlocked";
            if (state.completed) status = "Completed";
            return (
              <div
                key={level.level}
                className={`rounded-xl p-6 border border-white/10 shadow-lg flex flex-col items-center ${!state.unlocked ? "opacity-50" : ""}`}
                style={{ background: "#23242d", minHeight: 220 }}
              >
                <div className="text-primary font-bold text-lg mb-2">Level {level.level}</div>
                <div className="text-white font-semibold text-xl mb-2 text-center">{level.title}</div>
                <div className="mb-4 text-foreground text-center">{level.quiz?.title}</div>
                <div className="mb-4 text-sm">Status: <span className="font-bold">{status}</span></div>
                {state.completed && typeof state.score === 'number' && (
                  <div className="mb-2 text-green-400 font-semibold">Score: {state.score}%</div>
                )}
                <button
                  className={`w-full py-2 px-4 rounded bg-primary text-white font-bold mt-auto transition-all duration-200 ${!state.unlocked ? "cursor-not-allowed bg-gray-600" : "hover:bg-primary/90"}`}
                  onClick={() => handleStartQuiz(idx)}
                  disabled={!state.unlocked}
                >
                  {state.completed ? "Retake Quiz" : "Start Quiz"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Unit1Levels;
