
import Quiz from "../components/quiz/Quiz";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";

const QuizPage = () => (
  <Layout>
    <SEO
      title="Vibe Coding Quiz | Test Your AI Coding Knowledge"
      description="Test your vibe coding and AI-assisted development knowledge with interactive quizzes. Practice ChatGPT coding, GitHub Copilot skills, and AI programming concepts."
      keywords="vibe coding quiz, AI coding test, ChatGPT coding quiz, GitHub Copilot quiz, AI development assessment"
      canonical="https://vibelevels.com/quiz"
    />
    
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-10">
      <Quiz unitKey="unit1" quizType="level" index={0} />
    </div>
  </Layout>
);

export default QuizPage;
