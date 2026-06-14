import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Archive | Irwanto',
  description: 'A full list of projects I have worked on.',
};

export default function ArchivePage() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:py-24">
        <Link 
          href="/" 
          className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300 transition-colors hover:text-teal-400 focus-visible:text-teal-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" aria-hidden="true">
            <path fillRule="evenodd" d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z" clipRule="evenodd"></path>
          </svg>
          Irwanto
        </Link>
        
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl mb-10 mt-2">All Projects</h1>
        
        <table className="w-full border-collapse text-left">
          <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
            <tr>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Made at</th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-300/10 last:border-none transition-all hover:bg-slate-800/50">
              <td className="py-4 pr-4 align-top text-sm text-slate-400">
                <div className="translate-y-px">2026</div>
              </td>
              <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                <div>National SCM Command Center</div>
                {/* Mobile view metadata */}
                <div className="block lg:hidden mt-2 text-sm text-slate-400">Kawan Lama Group</div>
                <div className="block lg:hidden mt-2 flex flex-wrap gap-1">
                  <span className="text-teal-300/70">Laravel, Next.js, Tailwind CSS, SQL</span>
                </div>
              </td>
              <td className="hidden py-4 pr-4 align-top text-sm text-slate-400 lg:table-cell">
                <div className="translate-y-px">Kawan Lama Group</div>
              </td>
              <td className="hidden py-4 pr-4 align-top lg:table-cell">
                <ul className="flex flex-wrap -translate-y-1.5">
                  <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Laravel</div></li>
                  <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Next.js</div></li>
                  <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Tailwind CSS</div></li>
                  <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">SQL</div></li>
                </ul>
              </td>
            </tr>

            <tr className="border-b border-slate-300/10 last:border-none transition-all hover:bg-slate-800/50">
              <td className="py-4 pr-4 align-top text-sm text-slate-400">
                <div className="translate-y-px">2025</div>
              </td>
              <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                <div>Automated BI Pipeline & Dashboards</div>
                <div className="block lg:hidden mt-2 text-sm text-slate-400">PT Home Center Indonesia</div>
                <div className="block lg:hidden mt-2 flex flex-wrap gap-1">
                  <span className="text-teal-300/70">Google Apps Script, Looker Studio, Google Sheets, ETL</span>
                </div>
              </td>
              <td className="hidden py-4 pr-4 align-top text-sm text-slate-400 lg:table-cell">
                <div className="translate-y-px">PT Home Center Indonesia</div>
              </td>
              <td className="hidden py-4 pr-4 align-top lg:table-cell">
                <ul className="flex flex-wrap -translate-y-1.5">
                  <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Google Apps Script</div></li>
                  <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Looker Studio</div></li>
                  <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Google Sheets</div></li>
                  <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">ETL</div></li>
                </ul>
              </td>
            </tr>

            <tr className="border-b border-slate-300/10 last:border-none transition-all hover:bg-slate-800/50">
              <td className="py-4 pr-4 align-top text-sm text-slate-400">
                <div className="translate-y-px">2024</div>
              </td>
              <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                <div>MHE Tracking Application</div>
                <div className="block lg:hidden mt-2 text-sm text-slate-400">PT Home Center Indonesia</div>
                <div className="block lg:hidden mt-2 flex flex-wrap gap-1">
                  <span className="text-teal-300/70">Flutter, Dart, WMS Integration</span>
                </div>
              </td>
              <td className="hidden py-4 pr-4 align-top text-sm text-slate-400 lg:table-cell">
                <div className="translate-y-px">PT Home Center Indonesia</div>
              </td>
              <td className="hidden py-4 pr-4 align-top lg:table-cell">
                <ul className="flex flex-wrap -translate-y-1.5">
                  <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Flutter</div></li>
                  <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Dart</div></li>
                  <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">WMS Integration</div></li>
                </ul>
              </td>
            </tr>

            <tr className="border-b border-slate-300/10 last:border-none transition-all hover:bg-slate-800/50">
              <td className="py-4 pr-4 align-top text-sm text-slate-400">
                <div className="translate-y-px">2023</div>
              </td>
              <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                <div>Operational Workflow Automation</div>
                <div className="block lg:hidden mt-2 text-sm text-slate-400">PT Home Center Indonesia</div>
                <div className="block lg:hidden mt-2 flex flex-wrap gap-1">
                  <span className="text-teal-300/70">AppSheet, Google Workspace, Data Automation</span>
                </div>
              </td>
              <td className="hidden py-4 pr-4 align-top text-sm text-slate-400 lg:table-cell">
                <div className="translate-y-px">PT Home Center Indonesia</div>
              </td>
              <td className="hidden py-4 pr-4 align-top lg:table-cell">
                <ul className="flex flex-wrap -translate-y-1.5">
                  <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">AppSheet</div></li>
                  <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Google Workspace</div></li>
                  <li className="my-1 mr-1.5"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Data Automation</div></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
