export default function Footer() {
  return (
    <footer className="border-t border-neutral-800/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-neutral-400 md:flex-row md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} Lumago</div>
        <div className="flex gap-4">
          <a className="hover:text-neutral-200" href="https://stream-reader.ai" target="_blank" rel="noreferrer">
            Stream-Reader
          </a>
          <a className="hover:text-neutral-200" href="https://github.com/Maintindihan" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
