import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { apiRequest } from "../api";
import { useState } from "react";

const AttemptQuiz = () => {
  const { quizid } = useParams();
  const [quizData, setQuizData] = useState({});
  const [checkAnswers, setcheckAnswers] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  console.log("selectedAnswers", selectedAnswers);

  const getQuizData = async () => {
    console.log("quizid", quizid);
    try {
      const resp = await apiRequest({
        method: "GET",
        path: `api/quizz?id=${quizid}`,
      });
      console.log("resp", resp);
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
        className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-4 mb-6"
      >
        <h2 className="text-xl font-semibold mb-4">
          Q{index + 1}. {item.text}
        </h2>

        <div className="space-y-3">
          {item.options.map((option, index) => (
            <div
              key={option.id}
              className={`flex items-start space-x-2 ${
                checkAnswers
                  ? option.isCorrect
                    ? "border border-green-500"
                    : selectedAnswers[item.id] === index
                    ? "border border-red-500"
                    : ""
                  : ""
              }`}
            >
              <input
                type="radio"
                id={`q${item.id}-opt${option.id}`}
                name={`question-${item.id}`}
                className="mt-1"
                onChange={() => optionChange(item.id, index)}
              />
              <label
                htmlFor={`q${item.id}-opt${option.id}`}
                className="whitespace-pre-wrap"
              >
                {option.text}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const handleSubmit = () => {
    setcheckAnswers(true);
  };

  return (
    <div>
      {quizData.questions?.length ? (
        <>
          {quizData.questions.map(renderQuiz)}
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <p>Loading or no questions available.</p>
      )}
    </div>
  );
};

export default AttemptQuiz;
