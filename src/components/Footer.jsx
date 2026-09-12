function Footer() {
  return (
    <footer className="border-t border-zinc-800">
      <div className="container flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">

        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Asif Rahman. All rights reserved.
        </p>

        <p className="text-sm text-zinc-600">
          Built with React & Tailwind CSS.
        </p>

      </div>
    </footer>
  );
}

export default Footer;