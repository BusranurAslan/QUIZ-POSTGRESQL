"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Results() {
  const router = useRouter();
  const [state, setState] = useState({
    correct: 0,
    incorrect: 0,
    answeredQuestions: []
  });

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const correct = parseInt(query.get('correct'), 10) || 0;
    const incorrect = parseInt(query.get('incorrect'), 10) || 0;
    const answeredQuestions = JSON.parse(decodeURIComponent(query.get('answeredQuestions') || '[]'));

    setState({
      correct,
      incorrect,
      answeredQuestions
    });
  }, []);

  const goToDashboard = () => {
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6">Quiz Sonuçları</h1>
      <p className="text-lg">Doğru Cevaplar: {state.correct}</p>
      <p className="text-lg">Yanlış Cevaplar: {state.incorrect}</p>
      <h2 className="text-xl font-semibold mt-4">Yanıtlanan Sorular:</h2>
      <ul className="list-disc mt-2">
        {state.answeredQuestions.length > 0 ? (
          state.answeredQuestions.map((question, index) => (
            <li key={index} className="mt-1">
              {question.question}: {question.answer}
            </li>
          ))
        ) : (
          <li>No answered questions available</li>
        )}
      </ul>
      <button
        onClick={goToDashboard}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-4"
      >
        Ana Sayfaya Dön
      </button>
    </div>
  );
}
