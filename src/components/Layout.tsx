function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-sky-100 to-violet-100 p-8 text-slate-800">
      <div className="w-full max-w-md overflow-clip rounded-lg border border-slate-300 bg-white/40 shadow backdrop-blur-xl">
        {children}
      </div>
    </main>
  );
}

export default Layout;
