"use client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 md:p-8 bg-zinc-950 antialiased text-zinc-100">
      <div className="w-full max-w-2xl text-center py-12">
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
          Lie & Excuse Machine
        </h1>
        <p className="text-zinc-400 text-sm mt-2">
          Sistem başarıyla kuruldu. Arayüz elemanları için hazır.
        </p>
      </div>
    </main>
  );
}
