import Quiz from "../components/Quiz";
import { Layout } from "@/components/Layout";

const QuizPage = () => (
  <Layout>
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-10">
      <Quiz unitKey="unit1" quizType="level" index={0} />
    </div>
  </Layout>
);

export default QuizPage;
