# 📱 Mobile-First Offline POS & 5% Salary Accumulator (PWA)

A lightweight, ultra-fast, mobile-first Point of Sale (POS) Progressive Web Application built with **HTML5**, **Tailwind CSS**, **Vanilla JavaScript**, **Dexie.js (IndexedDB)**, and **html2pdf.js**.

All files are structured flat in the root directory for instant **GitHub Pages** hosting with zero configuration!

---

## 🚀 Key Features

### 1. 🔒 3-Digit Security PIN Lock
- **Default PIN:** `123`
- Large touch-optimized numeric dialpad (0-9, C, Backspace).
- Auto-verifies upon entering 3 digits.
- **Immediate redirection to the Main POS Sales Screen** upon successful login.
- In-app PIN change capability under Settings.

### 2. 🛒 Main POS / Sales Screen
- Large mobile-friendly item cards with pre-filled **Retailer Prices (LKR)**.
- Category filters & live search bar.
- **Fast Input Bottom Sheet:**
  - Auto-selected Item Name & Unit Price.
  - **Qty Sold** (+/- steppers, +1, +5, +10 quick buttons).
  - **Free Issues** (number of free promotional packets given).
  - **Return Qty** (customer returned packets).
  - Live Line Total & 5% Commission preview.
- **Floating Cart Tray** with item count, total free issues, total returns, and running bill total.
- **Big Green "SAVE BILL" Button:**
  - One-tap transaction saving into local **IndexedDB** (`Dexie.js`).
  - Stores exact timestamp (`YYYY-MM-DD HH:mm:ss`), date, sales amount, free issues, returns, 5% commission, and items JSON.
  - Instant audio-visual feedback and input reset for the next sale.

### 3. 📊 Daily Dashboard (Dawase Dashboard)
- **💵 Dawase Sale Eka (Today's Sales):** Real-time daily revenue in LKR.
- **🧾 Bill Gana (Total Bills Count):** Total completed transactions today.
- **🎁 Free Issues Giyapu Pekat Gana:** Total free issue packets given today.
- **🔄 Return Apu Gana:** Total quantity & value of returned items today.
- **💰 5% Salary / Commission Accumulator:**
  - **Today's 5% Commission:** Automatically calculated (`Today's Sales * 5%`).
  - **Cumulative Total Salary Balance:** Day-by-day running total across all recorded days in the database.
- **Today's Bills History Log:** Expandable transaction records for today.

### 4. 📑 Reporting & PDF Export Module
- **Filter Periods:** Weekly (Last 7 Days), Monthly, Yearly, and All-Time.
- **Summary KPIs:** Total Sales, 5% Commission, Bill Count, Free Issues, Returns.
- **Item-Wise Sales Breakdown Table:** Aggregated quantities sold, free issues, returns, and sales revenue per item.
- **One-Click "DOWNLOAD PDF REPORT":** High-resolution, print-ready PDF invoice/report generated with `html2pdf.js`.

### 5. ⚙️ Item Master, Data Management & Reset
- Add, edit, and delete items with retailer prices and categories.
- Pre-seeded with realistic sample items.
- Backup & restore (Export/Import entire database as JSON).
- **Comprehensive Reset Options:**
  - **🔥 Reset Everything (Factory Reset):** Clears all Sales, Reports, Itemized Analytics, Daily & Cumulative 5% Salary (0.00), Active Cart, and resets Items to clean defaults.
  - **📊 Clear Sales & Reports Only:** Clears transaction history and 5% Commission without touching custom items.
  - **📦 Reset Items Only:** Restores item master list to default sample items.
- Shop & Sales Agent profile customization.

---

## 🌐 How to Host on GitHub Pages (Free & Instant)

1. Create a new repository on [GitHub](https://github.com/new) (e.g., `mob-pos`).
2. Upload/push all the files in this folder directly to the root of the repository:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
   - `icon.svg`
   - `README.md`
3. Go to your GitHub repository **Settings** -> **Pages** (under Code and automation).
4. Under **Branch**, select `main` (or `master`) and folder `/ (root)`, then click **Save**.
5. In 1–2 minutes, your app will be live at `https://<your-username>.github.io/<repo-name>/`!

---

## 📱 How to Install on Phone as an App (Android & iOS)

### On Android (Chrome / Edge / Brave):
1. Open your GitHub Pages link in Chrome.
2. Tap the **"Install MOB POS on Phone"** banner at the top OR tap browser menu (⋮) -> **"Install App"** / **"Add to Home screen"**.
3. Tap **Install**. The app icon will appear on your phone home screen with full offline capability!

### On iPhone / iPad (Safari):
1. Open your GitHub Pages link in **Safari**.
2. Tap the **Share** button (📤 at the bottom of the screen).
3. Scroll down and tap **"Add to Home Screen"**.
4. Tap **Add**. The app will open in full-screen native standalone mode!
