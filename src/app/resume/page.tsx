import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "resume.pdf",
};

export default function ResumePage() {
  return (
    <main className="w-full h-screen m-0 p-0 overflow-hidden">
      <iframe 
        src="/resume.pdf" 
        className="w-full h-full border-none" 
        title="resume.pdf"
      />
    </main>
  );
}
