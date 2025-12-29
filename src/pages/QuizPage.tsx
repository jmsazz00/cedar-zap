import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import QuizLayout from "../components/QuizLayout";

const QuizPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const duration = parseInt(searchParams.get("duration") || "4800");
  const name = searchParams.get("name") || "";
  const year = searchParams.get("year") || "N/A";

  useEffect(() => {
    if (!searchParams.get("duration") && !searchParams.get("name")) {
      navigate("/");
    }
  }, [searchParams, navigate]);

  return (
    <QuizLayout
      quiz={{
        duration,
        name,
        year: year,
      }}
    />
  );
};

export default QuizPage;
