export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">

      <div className="mx-auto max-w-7xl px-6 text-center">

        <h2 className="text-2xl font-bold">
          Srija Ghorui
        </h2>

        <p className="mt-4 text-gray-400">
          AI Engineer • Machine Learning • Software Engineer  
        </p>

        <p className="mt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} Srija Ghorui.
          Built with Next.js, Tailwind CSS & Framer Motion.
        </p>

      </div>

    </footer>
  );
}