import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-700">
      <div className="flex flex-col gap-2 p-5 max-w-xs w-full bg-slate-800 rounded-lg">
        <div className=" text-center my-4 text-white"><h1>Anasayfa</h1></div>
        <div>
            <Link href="./signin"
            className=" bg-slate-900 my-4 p-3 rounded-lg block text-white"
            >Giriş Yap</Link>
        </div>
        <div>
            <Link href="./register"
            className="bg-slate-900 my-4 p-3 rounded-lg block text-white"
            >Kayıt ol</Link>
        </div>
      </div>
    </main>
  );
}
