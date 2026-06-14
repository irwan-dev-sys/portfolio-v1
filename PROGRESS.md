# Irwanto Portfolio - Architecture & Roadmap Tracker

Dokumen ini berfungsi sebagai peta arsitektur (Tech Stack & Workflow) serta daftar pengembangan lanjutan (Future Roadmap) agar visi dan standar proyek ini selalu konsisten dan dapat dipantau perkembangannya.

---

## 1. Arsitektur & Teknologi (Tech Stack)

Web ini dikonfigurasi sebagai High-Performance Static App.
- Core Engine: Next.js 14 (App Router).
- Rendering Strategy: output: 'export' (100% Static Site Generation / SSG). Menghilangkan kebutuhan server backend (Node.js) sehingga performa lebih cepat dan stabil terhadap lonjakan pengunjung.
- Styling & UI: Tailwind CSS untuk tata letak responsif, dan Framer Motion untuk animasi.
- State Management (Bilingual): Menggunakan useState bawaan React untuk pergantian bahasa (EN/ID), menarik data dari Dictionary Object tanpa proses reload halaman. Bahasa default ditetapkan sebagai Bahasa Indonesia (ID).
- Deployment & Hosting: Firebase Hosting. Berjalan secara eksklusif menggunakan folder out/.

## 2. Alur Kerja & Modifikasi (Workflow)

Untuk menjaga struktur kode React/Next.js tetap rapi, data dipisahkan dari tampilan antarmuka.
- Mengubah teks/isi CV: Modifikasi file src/data/dictionary.ts. Seluruh teks bahasa Inggris dan Indonesia berpusat di direktori tersebut.
- Menambahkan gambar proyek: Masukkan file gambar (png/jpg) ke folder public/projects/, kemudian ubah parameter image: null di dalam dictionary.ts menjadi path gambar yang sesuai.
- Alur Rilis (Deploy): 
  Setiap terdapat perubahan, jalankan perintah berikut di terminal:
  1. npm run build (Membangun ulang HTML statis ke folder out/)
  2. firebase deploy --only hosting (Meluncurkan pembaruan ke URL publik)

---

## 3. Status Penyelesaian Tugas (Completed)

- [x] Setup & Base Layout: Integrasi layout berbasis template Brittany Chiang v5.
- [x] Data Injection: Memasukkan rekam jejak profesional sebagai Data Analyst & BI Developer.
- [x] Bilingual System (i18n): Arsitektur kamus data mandiri yang memisahkan teks EN dan ID secara rapi. Pengaturan bahasa default menjadi ID.
- [x] Performance & Animation Boost: Memindahkan logika animasi cahaya kursor dari siklus render React ke mutasi DOM menggunakan useRef, menghasilkan animasi stabil pada 60FPS.
- [x] Project Modal System: Integrasi modal popup dinamis untuk menjabarkan detail proyek secara komprehensif.
- [x] Content Refinement: Memperbarui narasi profesional dan menyertakan tautan profil eksternal.
- [x] Production Ready & SEO: Optimasi gambar, pembersihan peringatan ESLint (zero error), dan penambahan Meta Tags untuk SEO.
- [x] Mobile Responsiveness & Layout Refinement: Perbaikan layout mobile untuk menghilangkan scroll horizontal, memastikan penempatan elemen UI persis sesuai referensi desain asli.
- [x] Live Deployment: Diluncurkan di Firebase dengan performa statis penuh pada URL eksklusif.

---

## 4. Pengembangan Lanjutan (Future Roadmap)

Daftar inisiatif opsional untuk iterasi pengembangan berikutnya:

### Fase A: Kelengkapan Aset
- [x] Penggantian Placeholder Gambar: Memasukkan aset gambar asli dari Dashboard Looker Studio, AppSheet, atau Sertifikasi ke dalam proyek.
- [x] Pembaruan File Resume: Memastikan dokumen resume berformat PDF versi terbaru ditempatkan pada direktori public.

### Fase B: Pengembangan Fitur Opsional
- [ ] Integrasi Headless CMS untuk Blog: Menghubungkan platform melalui Notion API atau Sanity.io guna memungkinkan penulisan studi kasus teknis secara langsung tanpa modifikasi kode.
- [ ] Custom Event Tracking (Data Analytics): Integrasi platform analitik seperti Google Analytics / Firebase Analytics untuk melacak matriks interaksi pengunjung (contoh: frekuensi unduhan resume, distribusi demografi pengunjung).
- [ ] Dark/Light Mode Toggle: Penambahan fitur pergantian tema antarmuka pengguna untuk mengakomodasi preferensi visual tambahan.
