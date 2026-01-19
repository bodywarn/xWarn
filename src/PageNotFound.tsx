import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h1 className="text-9xl md:text-[200px] font-black mb-8 text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-400 select-none">
          404
        </h1>

        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-zinc-100 mb-4 tracking-tight">
            PAGE NOT FOUND
          </h2>
          <p className="text-lg md:text-xl text-zinc-400">
            This page has been removed or doesn't exist
          </p>
        </div>

        <button
          onClick={() => navigate('/')}
          className="group relative px-8 py-4 cursor-pointer bg-zinc-800 border-2 border-zinc-600 rounded-xl"
        >
          <span className="text-xl font-bold text-zinc-100 flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            RETURN TO HOME
          </span>
        </button>

        <div className="mt-16 flex justify-center gap-6">
          <div 
            className="w-20 h-20 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 animate-bounce shadow-lg hover:scale-110 transition-transform cursor-pointer"
            style={{ animationDelay: '0s' }}
          />
          <div 
            className="w-20 h-20 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 animate-bounce shadow-lg hover:scale-110 transition-transform cursor-pointer"
            style={{ animationDelay: '0.1s' }}
          />
          <div 
            className="w-20 h-20 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 animate-bounce shadow-lg hover:scale-110 transition-transform cursor-pointer"
            style={{ animationDelay: '0.2s' }}
          />
        </div>

        <p className="mt-12 text-sm text-zinc-600">
          Error Code: 404 • Page Not Found
        </p>
      </div>
    </div>
  );
}