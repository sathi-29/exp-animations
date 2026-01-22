import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main className="relative h-screen w-full bg-black">
      {/* 1. The 3D Scene Background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/lpSccIfGZigHCHdd/scene.splinecode" 
        />
      </div>

      {/* 2. The UI Overlay */}
      <nav className="absolute top-0 w-full p-8 flex justify-between items-center z-10 text-white">
        <h1 className="text-2xl font-bold tracking-tighter">DESIGN.AI</h1>
        <ul className="flex gap-8 text-sm uppercase tracking-widest opacity-80">
          <li>Work</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 pointer-events-none">
        <h2 className="text-6xl md:text-8xl font-black mb-4 drop-shadow-2xl">
          FUTURE ERA
        </h2>
        <p className="max-w-md text-lg opacity-70">
          Experience the next generation of interactive 3D web design built with Spline and Next.js.
        </p>
        <button className="mt-8 px-8 py-3 bg-white text-black font-bold rounded-full pointer-events-auto hover:bg-gray-200 transition-colors">
          Get Started
        </button>
      </div>
    </main>
  );
}