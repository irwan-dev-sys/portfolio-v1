export const dict = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects"
    },
    hero: {
      title: "Data Analyst & Developer",
      description: "I build data-driven solutions and web applications."
    },
    about: {
      p1: "Hi, I'm Irwanto, a Data Analyst and Developer passionate about solving complex problems.",
      p2: "I specialize in bridging the gap between raw data and actionable insights, turning unstructured operational data into clean, automated systems.",
      p3: "When I'm not coding or analyzing data, I enjoy exploring new technologies and building side projects.",
      p4: "",
      p5: ""
    },
    experience: {
      resume: "View Full Résumé",
      jobs: [
        {
          date: "2022 — Present",
          title: "Senior Data Analyst",
          company: "Google",
          url: "https://about.google",
          description: "Analyzing large datasets and building automated pipelines to improve business operations on a global scale. Collaborated cross-functionally to deliver high-impact insights.",
          tech: ["Python", "SQL", "BigQuery", "Looker"]
        }
      ]
    },
    projects: {
      archive: "View Full Project Archive",
      items: [
        {
          title: "Global Data Dashboard",
          description: "An internal dashboard used to track key performance indicators across multiple regions.",
          tech: ["Next.js", "Tailwind CSS", "TypeScript"],
          emoji: "📊",
          image: null,
          modalDetails: {
            overview: "A comprehensive dashboard for regional KPI tracking.",
            problem: "Data was scattered and difficult to aggregate.",
            solution: "Built a unified Next.js dashboard connected to BigQuery.",
            impact: ["Saved 20 hours per week in reporting", "Improved decision making speed"],
            techStack: ["Next.js", "Tailwind CSS", "TypeScript", "BigQuery"],
            status: "Live in Production"
          }
        }
      ],
      modalLabels: {
        overview: "Overview",
        problem: "The Problem",
        solution: "What Was Built",
        impact: "Impact"
      }
    },
    footerTagline: "Bridging the gap between <span className=\"text-slate-400 font-medium hover:text-teal-300 transition-colors\">data</span> and <span className=\"text-slate-400 font-medium hover:text-teal-300 transition-colors\">code</span>."
  },
  id: {
    nav: {
      about: "Tentang",
      experience: "Pengalaman",
      projects: "Proyek"
    },
    hero: {
      title: "Data Analyst & Developer",
      description: "Saya membangun solusi berbasis data dan aplikasi web interaktif."
    },
    about: {
      p1: "Halo, saya Irwanto. Saya adalah seorang Data Analyst dan Developer yang bersemangat memecahkan masalah kompleks.",
      p2: "Spesialisasi saya adalah menjembatani jarak antara data operasional mentah dan wawasan yang dapat ditindaklanjuti dengan sistem otomatis.",
      p3: "Di luar pekerjaan, saya senang mengeksplorasi teknologi baru dan bereksperimen dengan proyek-proyek sampingan.",
      p4: "",
      p5: ""
    },
    experience: {
      resume: "Lihat Résumé Lengkap",
      jobs: [
        {
          date: "2022 — Sekarang",
          title: "Senior Data Analyst",
          company: "Google",
          url: "https://about.google",
          description: "Menganalisis dataset berskala besar dan membangun pipeline otomatis untuk meningkatkan operasional bisnis skala global. Berkolaborasi antar divisi untuk menghasilkan insight berdampak tinggi.",
          tech: ["Python", "SQL", "BigQuery", "Looker"]
        }
      ]
    },
    projects: {
      archive: "Lihat Arsip Proyek Lengkap",
      items: [
        {
          title: "Global Data Dashboard",
          description: "Dashboard internal yang digunakan untuk melacak metrik performa utama (KPI) di berbagai regional.",
          tech: ["Next.js", "Tailwind CSS", "TypeScript"],
          emoji: "📊",
          image: null,
          modalDetails: {
            overview: "Dashboard komprehensif untuk pelacakan KPI regional.",
            problem: "Data tersebar dan pelaporan sangat memakan waktu.",
            solution: "Membangun dashboard Next.js terpusat yang terhubung ke BigQuery.",
            impact: ["Menghemat 20 jam per minggu untuk pelaporan", "Meningkatkan kecepatan pengambilan keputusan manajemen"],
            techStack: ["Next.js", "Tailwind CSS", "TypeScript", "BigQuery"],
            status: "Live in Production"
          }
        }
      ],
      modalLabels: {
        overview: "Ringkasan",
        problem: "Masalah",
        solution: "Solusi & Implementasi",
        impact: "Dampak"
      }
    },
    footerTagline: "Menjembatani jarak antara <span className=\"text-slate-400 font-medium hover:text-teal-300 transition-colors\">data</span> dan <span className=\"text-slate-400 font-medium hover:text-teal-300 transition-colors\">kode</span>."
  }
};
