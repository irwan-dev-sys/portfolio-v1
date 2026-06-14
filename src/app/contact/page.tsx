import 'tailwindcss/tailwind.css';

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cBg font-oldStandardTT">
      <h1 className="markdown-h1 mb-8">Contact</h1>
      <div className="text-cBody max-w-md px-4 text-left">
        <div className="space-y-4">
          <a href="mailto:hello@irwanto.dev" className="block text-cLink hover:text-cLinkHover hover:underline hover:font-bold">Email: Contact Me</a>
          <a
            href="https://www.linkedin.com/in/irwandev"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-cLink hover:text-cLinkHover hover:underline hover:font-bold"
          >
            LinkedIn: Irwanto
          </a>
          <a
            href="https://github.com/irwan-dev-sys"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-cLink hover:text-cLinkHover hover:underline hover:font-bold"
          >
            GitHub: irwan-dev-sys
          </a>
        </div>
      </div>
    </div>
  );
}