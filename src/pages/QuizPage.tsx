
import Quiz from "../components/quiz/Quiz";
import { Layout } from "@/components/Layout";
import { useParams } from "react-router-dom";

const QuizPage = () => {
  const { unitKey = "unit1", quizType = "level", index = "0" } = useParams();
  
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-10">
        <Quiz unitKey={unitKey} quizType={quizType} index={parseInt(index)} />
      </div>
    </Layout>
  );
};

export default QuizPage;
