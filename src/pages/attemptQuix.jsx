import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { apiRequest } from "../api";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import RefreshIcon from "@mui/icons-material/Refresh";
import ExploreIcon from "@mui/icons-material/Explore";

const AttemptQuiz = () => {
  const { quizid } = useParams();
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState({});
  const [checkAnswers, setcheckAnswers] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);

  const getQuizData = async () => {
    try {
      const resp = await apiRequest({
        method: "GET",
        path: `/quiz?id=${quizid}`,
      });
      setQuizData(resp.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getQuizData();
  }, []);

  const optionChange = (questionId, optionIndex) => {
    const answers = { ...selectedAnswers };
    answers[questionId] = optionIndex;
    setSelectedAnswers(answers);
  };

  const renderQuiz = (item, index) => {
    return (
      <div
        key={item.id}
        className="p-8 max-w-3xl mx-auto bg-[#0A0F1C]/40 backdrop-blur-lg rounded-2xl shadow-lg space-y-6 mb-8 border border-white/10 relative overflow-hidden"
      >
        {/* Background glow effects */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#00A3FF] rounded-full filter blur-[100px] opacity-20" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#00FFB2] rounded-full filter blur-[100px] opacity-20" />

        <h2 className="text-2xl font-semibold mb-6 text-white/90">
          <span className="bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] bg-clip-text text-transparent">
            Q{index + 1}.
          </span>{" "}
          {item.text}
        </h2>

        <div className="space-y-4">
          {item.options.map((option, index) => (
            <div
              key={option.id}
              onClick={() => optionChange(item.id, index)}
              className={`flex items-center p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                checkAnswers
                  ? option.isCorrect
                    ? "bg-green-500/10 border border-green-500/30"
                    : selectedAnswers[item.id] === index
                    ? "bg-red-500/10 border border-red-500/30"
                    : "bg-white/5 border border-white/10"
                  : selectedAnswers[item.id] === index
                  ? "bg-[#00A3FF]/10 border-[#00A3FF]/30 border"
                  : "bg-white/5 hover:bg-white/10 border border-white/10"
              }`}
            >
              <input
                type="radio"
                id={`q${item.id}-opt${option.id}`}
                name={`question-${item.id}`}
                className="hidden"
                checked={selectedAnswers[item.id] === index}
                onChange={() => {}} // Empty onChange to prevent React warning
                disabled={checkAnswers}
              />
              <label
                className={`flex items-center justify-between w-full ${
                  selectedAnswers[item.id] === index
                    ? "text-[#00A3FF]"
                    : "text-white/80"
                }`}
              >
                <span className="whitespace-pre-wrap">{option.text}</span>
                {checkAnswers ? (
                  <span className="ml-4">
                    {option.isCorrect ? (
                      <CheckCircleIcon className="text-green-500" />
                    ) : selectedAnswers[item.id] === index ? (
                      <CancelIcon className="text-red-500" />
                    ) : null}
                  </span>
                ) : (
                  selectedAnswers[item.id] === index && (
                    <div className="w-2 h-2 rounded-full bg-[#00A3FF] ml-4" />
                  )
                )}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    quizData.questions.forEach((question) => {
      if (selectedAnswers[question.id] !== undefined) {
        const selectedOption = question.options[selectedAnswers[question.id]];
        if (selectedOption.isCorrect) {
          correctAnswers++;
        }
      }
    });
    return Math.round((correctAnswers / quizData.questions.length) * 100);
  };

  const handleSubmit = () => {
    setcheckAnswers(true);
    const finalScore = calculateScore();
    setScore(finalScore);
    setShowModal(true);
  };

  const handleRetry = () => {
    window.location.reload();
  };

  const handleExplore = () => {
    navigate("/");
  };

  const ResultModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#0A0F1C] p-8 rounded-2xl max-w-md w-full mx-4 border border-white/10 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#00A3FF] rounded-full filter blur-[100px] opacity-20" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#00FFB2] rounded-full filter blur-[100px] opacity-20" />

        <div className="text-center relative z-10">
          {score >= 70 ? (
            <>
              <EmojiEventsIcon
                sx={{ fontSize: 64 }}
                className="text-[#00FFB2] mb-4"
              />
              <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] bg-clip-text text-transparent">
                Excellent Performance!
              </h2>
              <p className="text-white/80 mb-6">
                You scored {score}%! Your dedication to learning shines through.
                Keep exploring and challenging yourself!
              </p>
              <button
                onClick={handleExplore}
                className="w-full py-3 px-6 bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] rounded-lg text-white font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ExploreIcon />
                Explore More Quizzes
              </button>
            </>
          ) : (
            <>
              <SentimentVeryDissatisfiedIcon
                sx={{ fontSize: 64 }}
                className="text-[#00A3FF] mb-4"
              />
              <h2 className="text-2xl font-bold mb-2 text-white">
                Room for Improvement
              </h2>
              <p className="text-white/80 mb-6">
                You scored {score}%. Don't worry! Every attempt is a step toward
                mastery. Would you like to try again?
              </p>
              <div className="space-y-3">
                <button
                  onClick={handleRetry}
                  className="w-full py-3 px-6 bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] rounded-lg text-white font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <RefreshIcon />
                  Try Again
                </button>
                <button
                  onClick={handleExplore}
                  className="w-full py-3 px-6 bg-white/10 rounded-lg text-white font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ExploreIcon />
                  Back to Home
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0A0F1C] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {quizData.questions?.length ? (
          <>
            <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] bg-clip-text text-transparent">
              {quizData.title || "Quiz"}
            </h1>
            {quizData.questions.map(renderQuiz)}
            {!checkAnswers && (
              <div className="text-center mt-8">
                <button
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] rounded-lg text-white font-semibold hover:opacity-90 transition-opacity duration-300 shadow-lg shadow-[#00A3FF]/20"
                >
                  Submit Quiz
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center text-white/60 py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00A3FF] mx-auto mb-4"></div>
            <p>Loading quiz questions...</p>
          </div>
        )}
      </div>
      {showModal && <ResultModal />}
    </div>
  );
};

export default AttemptQuiz;
