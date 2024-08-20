"use client";

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export default function Quiz({ params }) {
  const router = useRouter();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [timeLeft, setTimeLeft] = useState(20);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const fetchQuestions = useCallback(async () => {
    try {
      const res = await fetch(`/api/questions?quizId=${params.quizId}`);
      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      setQuestions(data);
    } catch (error) {
      console.error("Failed to fetch questions:", error);
    }
  }, [params.quizId]);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  const handleAnswer = useCallback((isCorrect) => {
    if (isCorrect !== null) {
      setScore(prevScore => ({
        correct: prevScore.correct + (isCorrect ? 1 : 0),
        incorrect: prevScore.incorrect + (isCorrect ? 0 : 1),
      }));
      setAnsweredQuestions(prev => [
        ...prev,
        {
          question: questions[currentQuestion]?.questionText,
          answer: isCorrect ? 'Correct' : 'Incorrect',
        }
      ]);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setTimeLeft(20);
    }
  }, [currentQuestion, questions]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      handleAnswer(null);
    }
  }, [timeLeft, handleAnswer]);

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setTimeLeft(20);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setTimeLeft(20);
    }
  };

  const finishQuiz = () => {
    router.push(`/results?correct=${score.correct}&incorrect=${score.incorrect}&answeredQuestions=${encodeURIComponent(JSON.stringify(answeredQuestions))}`);
  };
  

  if (!questions.length) {
    return <div>Loading...</div>;
  }

  const question = questions[currentQuestion];
  if (!question || !question.answers) {
    return <div>Question or answers not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Soru {currentQuestion + 1}</h1>
      <div className="bg-white p-10 md:p-12 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
        <p className="text-2xl mb-6">{question.questionText}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {question.answers && Array.isArray(question.answers) ? (
            question.answers.map((answer) => (
              <button
                key={answer.id}
                onClick={() => handleAnswer(answer.isCorrect)}
                className="bg-blue-500 text-white py-4 px-6 rounded-md hover:bg-blue-600 text-lg"
              >
                {answer.answerText}
              </button>
            ))
          ) : (
            <div>No answer available</div>
          )}
        </div>
      </div>
      <p className="mt-6 text-lg">Kalan Süre: {timeLeft} saniye</p>
      <div className="mt-8 flex justify-between w-full max-w-2xl mx-auto">
        <button
          onClick={goToPreviousQuestion}
          disabled={currentQuestion === 0}
          className={`bg-gray-500 text-white py-3 px-6 rounded-md hover:bg-gray-600 text-lg ${
            currentQuestion === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Önceki Soru
        </button>
        <button
          onClick={goToNextQuestion}
          disabled={currentQuestion === questions.length - 1}
          className={`bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 text-lg ${
            currentQuestion === questions.length - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          Sonraki Soru
        </button>
        {currentQuestion === questions.length - 1 && (
          <button
            onClick={finishQuiz}
            className="bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 text-lg"
          >
            Testi Bitir
          </button>
        )}
      </div>
    </div>
  );
}
