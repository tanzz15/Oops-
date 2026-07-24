# Panduan Publish Landing Page ke Internet

## 🚀 Cara Termudah: Vercel (GRATIS & Recomended)

> Vercel adalah platform buatan tim Next.js — jadi paling cocok dan gampang.

### Step 1: Buat Akun
1. Buka https://vercel.com
2. Klik **Sign Up** → pilih **Continue with GitHub** atau email

### Step 2: Upload Project ke GitHub (dulu)
1. Buka https://github.com/login → Login / Register
2. Klik tombol **+** (pojok kanan atas) → **New repository**
3. Isi:
   - **Repository name:** `oops-landing`
   - **Visibility:** pilih **Public**
   - Klik **Create repository**
4. Buka terminal di folder proyek (`d:/SEMESTER 6/Game/FP/Lp`), jalankan:
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/usernamekamu/oops-landing.git
git push -u origin main
```

### Step 3: Deploy ke Vercel
1. Buka https://vercel.com/new
2. Pilih repository `username/oops-landing`
3. Vercel auto-detect Next.js — **biarkan semua default**
4. Klik **Deploy**
5. Selesai! Website live di: `https://oops-landing.vercel.app`

---

## 🆓 Alternatif Lain (Gratis)

| Platform | Kelebihan | Link |
|----------|-----------|------|
| **Netlify** | Auto-deploy dari GitHub | https://netlify.com |
| **Cloudflare Pages** | Cepat, unlimited bandwidth | https://pages.cloudflare.com |

---

## 🔗 Setelah Deploy

Kamu akan punya URL seperti:
```
https://oops-landing.vercel.app
```

Bisa juga:
- **Beli domain sendiri** (misal: `oopsgame.com`) → Vercel bisa connect domain custom
- **Update tombol "Main Sekarang"** sudah otomatis mengarah ke itch.io

---

## ⚡ Build Manual (tanpa GitHub)

Kalau males push ke GitHub dulu, bisa build manual:

```bash
cd /d SEMESTER 6/Game/FP/Lp
npm run build
```

Hasil build ada di folder `out/` — file statis tinggal di-upload ke hosting manapun (Netlify drag & drop, Vercel drag & drop, dll).

