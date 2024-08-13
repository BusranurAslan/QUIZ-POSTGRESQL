import bcrypt from 'bcrypt';
import db from '../../../models';

export async function POST(req) {
  const { username, email, password, gender, birthdate } = await req.json();

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.models.User.create({
      username,
      email,
      password: hashedPassword,
      gender,
      birthdate,
    });
    return new Response(JSON.stringify({ message: 'Kayıt başarılı!' }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Kayıt başarısız!' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}