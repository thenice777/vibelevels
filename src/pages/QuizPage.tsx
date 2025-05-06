
import Quiz from "../components/quiz/Quiz";
import { Layout } from "@/components/Layout";
import { useParams } from "react-router-dom";

const QuizPage = () => {
  const { unitKey = "unit1", quizType = "level", index = "0" } = useParams();
  
  // Validate quizType to ensure it matches the expected type
  const validQuizType = (type: string): "level" | "challenge" | "advancedTopic" => {
    if (type === "level" || type === "challenge" || type === "advancedTopic") {
      return type;
    }
    return "level"; // Default to "level" if the quizType is not valid
  };
  
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-10">
        <Quiz 
          unitKey={unitKey}
          quizType={validQuizType(quizType)}
          index={parseInt(index)}
        />
      </div>
    </Layout>
  );
};

export default QuizPage;
