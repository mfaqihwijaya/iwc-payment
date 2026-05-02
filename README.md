# IWC Payment

Implementasi payment dashboard Inayatullah Wifi Center menggunakan:

* ⚛️ React + TypeScript
* ⚡ Vite
* 🎨 TailwindCSS v4
* 🧱 Feature-Based Architecture
* 🌐 HashRouter (Deployed on GitHub Pages)

---

# 📁 Project Structure

```
src/
│
├── app/
├── shared/
├── features/
├── layout/
├── lib/
├── styles/
└── assets/
```

---

## 🧠 `app/` — Application Core

Berisi konfigurasi utama aplikasi.

| File            | Fungsi                              |
| --------------- | ----------------------------------- |
| `App.tsx`       | Root React application              |
| `routes.tsx`    | Definisi routing halaman            |
| `providers.tsx` | Global providers (context aplikasi) |

**Tanggung jawab:**

* Routing
* Global state wrapper
* Provider injection

---

## ♻️ `shared/` — Shared Layer

Kode reusable yang dapat digunakan oleh semua fitur.

```
shared/
 ├── ui/
 ├── hooks/
 ├── utils/
 └── types/
```

### `ui/`

Reusable UI components.

Contoh:

* Button
* Card
* Modal

---

### `hooks/`

Custom React hooks global.

Contoh:

* `useDebounce`
* `useLocalStorage`
* `useDarkMode`

---

### `utils/`

Helper functions (non-React logic).

Contoh:

* format uptime
* parser data router
* generator voucher

---

### `types/`

Global TypeScript types.

Digunakan lintas fitur.

---

## 🚀 `features/` — Feature Modules

Berisi domain utama aplikasi.

```
features/
 ├── dashboard/
 ├── users/
 └── settings/
```

Setiap folder merepresentasikan **1 fitur aplikasi**.

Contoh struktur feature:

```
users/
 ├── UsersPage.tsx
 ├── components/
 ├── services/
 └── types/
```

**Isi feature:**

* Page UI
* Business logic
* Service/API logic
* Types khusus fitur

Keuntungan:

* Modular
* Mudah scaling
* Mudah maintenance

---

## 🧩 `layout/` — Layout System

Kerangka tampilan halaman.

Contoh:

* auth
* main
* profiles

Digunakan untuk membungkus halaman melalui router.

---

## 🔌 `lib/` — Infrastructure Layer

Berisi komunikasi dengan sistem eksternal.

```
lib/
 ├── apiClient.ts
 └── mikrotikClient.ts
```

### `apiClient.ts`

HTTP client aplikasi:

* request handler
* interceptor
* base configuration

---

### `spreadsheetClient.ts`

Adapter komunikasi Spreadsheet.

Contoh fungsi:

* menambah row
* mengedit cell
* menghapus sheet

UI **tidak langsung berkomunikasi** dengan router.

---

## 🎨 `styles/`

Global styling aplikasi.

Biasanya berisi:

* TailwindCSS import
* global CSS
* typography

---

## 🖼 `assets/`

Static resources:

* images
* icons
* fonts
* logo

Tidak berisi logic aplikasi.

---

# 🧱 Architecture Concept

Project menggunakan konsep:

* Feature-Based Architecture
* Layered Architecture
* Separation of Concerns

Flow aplikasi:

```
App
 ↓
Routes
 ↓
Layout
 ↓
Feature
 ↓
Service
 ↓
API / MikroTik Client
```

---

# 🌐 Routing

Menggunakan `HashRouter` agar kompatibel dengan GitHub Pages.

```
#/           → Dashboard
#/users      → User Management
#/settings   → Settings
```

---

# 🔥 Providers (Global Context)

`providers.tsx` digunakan untuk:

* Router connection state
* API caching
* Theme management
* Notification system

Provider memastikan state global dapat digunakan di seluruh aplikasi.

---

# 🚀 Development

Install dependency:

```
npm install
```

Run development server:

```
npm run dev
```

---

# 📦 Build

```
npm run build
```

---

# 🌍 Deploy (GitHub Pages)

Menggunakan github workflow .github/workflows/deploy.yml untuk automatisasi deployment

---
