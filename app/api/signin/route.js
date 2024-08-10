import bcrypt from 'bcrypt';
import db from '../../../models';

export async function POST(req) {
  try {
    const { username, password } = await req.json();
    console.log('Gelen veriler:', { username, password });

    const user = await db.models.User.findOne({ where: { username } });
    console.log('Bulunan kullanıcı:', user);

    if (!user) {
      console.log('Kullanıcı bulunamadı');
      return new Response(JSON.stringify({ message: 'Kullanıcı bulunamadı!' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('Şifre doğrulama sonucu:', isPasswordValid);

    if (!isPasswordValid) {
      return new Response(JSON.stringify({ message: 'Yanlış şifre!' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ message: 'Giriş başarılı!', user }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Giriş yapma hatası:', error);
    return new Response(JSON.stringify({ message: 'Giriş başarısız!' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
