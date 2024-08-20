import { NextResponse } from 'next/server';
import db from '../../../models';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const quizId = searchParams.get('quizId');

  if (!quizId) {
    return NextResponse.json({ error: "Quiz ID is required" }, { status: 400 });
  }

  const quizIdInt = parseInt(quizId.replace('quiz', ''), 10);

  if (isNaN(quizIdInt)) {
    return NextResponse.json({ error: "Invalid Quiz ID" }, { status: 400 });
  }

  console.log("Received quizId:", quizIdInt);

  try {
    const questions = await db.models.Question.findAll({
      where: { quizId: quizIdInt },
      include: [
        {
          model: db.models.Answer,
          as: 'answers',
          foreignKey: 'quizId'
        }
      ]
    });

    if (questions.length === 0) {
      return NextResponse.json({ error: "No questions found for this quiz" }, { status: 404 });
    }

    return NextResponse.json(questions);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
