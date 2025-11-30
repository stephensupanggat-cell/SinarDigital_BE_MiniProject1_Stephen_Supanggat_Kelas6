# TPM_BE_MiniProject1_Stephen_Supanggat_Kelas6


## Deskripsi
Prototype Express.js sederhana: routing modular, form input, validasi middleware, menyimpan submissions ke file JSON dan menampilkannya.


## Cara menjalankan
1. Pastikan Node.js terpasang.
2. Buka terminal di folder proyek.
3. Jalankan `npm install`.
4. Salin `.env.example` menjadi `.env` jika mau, atau jalankan langsung.
5. Jalankan `npm start` atau `npm run dev`.
6. Buka browser ke `http://localhost:3000`.


## Rute utama
- `GET /` — Home
- `GET /about` — About
- `GET /contact` — Form
- `POST /api/submit` — Terima data form
- `GET /submissions` — Halaman list submissions
- `GET /api/submissions` — JSON raw submissions
