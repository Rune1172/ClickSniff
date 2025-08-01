function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-between p-6">

      {/* ClickSniff Logo */}
      <header className="mt-2">
        <img
          src="/logos/clicksniff-logo.png"
          alt="ClickSniff Logo"
          className="w-32 sm:w-36 md:w-40 max-h-40 h-auto mx-auto mb-2"
        />
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-4">
        ClickSniff: YouTube Clickbait Detector
        </h1>

      </header>

      {/* Placeholder content area */}
      <main className="flex-grow flex items-center justify-center">
      <p className="text-base text-gray-400 italic">[ App content will go here... ]</p>
      </main>


      {/* TecVooDoo Footer */}
      <footer className="mt-6 text-center opacity-60">
        <img
          src="/logos/tecvoodoo-logo.png"
          alt="TecVooDoo Logo"
          className="w-20 sm:w-24 md:w-28 h-auto mx-auto"
        />
        <p className="text-xs text-gray-500 mt-1">A TecVooDoo Project</p>
      </footer>

    </div>
  );
}

export default App;

