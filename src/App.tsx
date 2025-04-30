
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import QuizPage from "./pages/QuizPage";
import Unit1Levels from "./pages/Unit1Levels";
import Unit1Quiz from "./pages/Unit1Quiz";
import NotFound from "./pages/NotFound";
import TestLayoutPage from "./pages/TestLayout";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Community from "./pages/Community";
import Dashboard from "./pages/Dashboard";
import Achievements from "./pages/Achievements";

// FAQ Pages
import FAQ from "./pages/FAQ";
import GetUsableCode from "./pages/faq/GetUsableCode";
import PreservingWorkingCode from "./pages/faq/PreservingWorkingCode";
import MaintainingContext from "./pages/faq/MaintainingContext";
import SimplifyingOverengineeredCode from "./pages/faq/SimplifyingOverengineeredCode";
import DebuggingAIGeneratedCode from "./pages/faq/DebuggingAIGeneratedCode";
import SecurityBestPractices from "./pages/faq/SecurityBestPractices";
import HandlingInconsistentOutputs from "./pages/faq/HandlingInconsistentOutputs";
import GeneratingEffectiveTests from "./pages/faq/GeneratingEffectiveTests";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/unit1" element={<Unit1Levels />} />
          <Route path="/unit1/quiz/:levelIdx" element={<Unit1Quiz />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseSlug" element={<CourseDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/community" element={<Community />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/achievements" element={<Achievements />} />
          
          {/* FAQ Routes */}
          <Route path="/faq" element={<FAQ />} />
          <Route path="/faq/getting-usable-code-faster" element={<GetUsableCode />} />
          <Route path="/faq/preserving-working-code" element={<PreservingWorkingCode />} />
          <Route path="/faq/maintaining-context" element={<MaintainingContext />} />
          <Route path="/faq/simplifying-overengineered-code" element={<SimplifyingOverengineeredCode />} />
          <Route path="/faq/debugging-ai-generated-code" element={<DebuggingAIGeneratedCode />} />
          <Route path="/faq/security-best-practices" element={<SecurityBestPractices />} />
          <Route path="/faq/handling-inconsistent-outputs" element={<HandlingInconsistentOutputs />} />
          <Route path="/faq/generating-effective-tests" element={<GeneratingEffectiveTests />} />

          {/* Custom Test Page Route */}
          <Route path="/testlayout" element={<TestLayoutPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
