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
- Large mobile-friendly item cards with pre-filled **Retailer Prices (LKR)** and category pills.
- **Fast Input Bottom Sheet:**
  - Auto-selected Item Name & Unit Price.
  - **Qty Sold** (+/- steppers, +1, +5, +10, +20, +25, +50, +100, +200 quick buttons).
  - **Auto Free Issue Schemes (ස්වයංක්‍රීය Free Issue ක්‍රමය):**
    - **Default Standard Tiers:**
      - **25 Pkts** ➔ **2 Free**
      - **50 Pkts** ➔ **5 Free**
      - **100 Pkts** ➔ **15 Free**
      - **200 Pkts** ➔ **40 Free**
      - **300 Pkts** ➔ **60 Free**
      - **400 Pkts** ➔ **80 Free**
    - **Dynamic Shop Preset Chips:** Quick one-touch chips for shop variations (e.g. 50 ➔ 10 Free, 100 ➔ 18 or 20 Free, 200 ➔ 50 Free).
    - **Configurable Free Tiers:** In Settings, users can add, edit, remove, or toggle auto-free calculations and customize tiers at any time.
  - **Return Handling & Exchanges (ආපසු ගැනීම් & හුවමාරු):**
    - **1-to-1 Exchange / Replacement (හුවමාරු):** Replace expired or damaged items with fresh stock with zero impact on bill amount.
    - **Deduct from Bill (බිලෙන් අඩු කිරීම):** Deduct return amount directly from bill total (`Gross Sales - Return Value = Net Sales`). Reduces Day Sales and Sales Rep Commission proportionally.
    - **Return Reasons:** Expired / Damaged vs Unsold / Slow-moving stock.
    - **Custom Return Rates:** Flexible return pricing (e.g. return credited at Rs. 115 instead of MRP Rs. 130).
    - **Return-Only / Cross-Item Exchanges:** Return items with 0 sales qty or cross-item swaps.
  - Live preview of Gross Sales, Return Deductions, Net Line Total, and Net Commission.
- **Floating Cart Tray** with real-time Net Bill Total and item count.
- **One-Tap "SAVE BILL":** Saves into IndexedDB (`Dexie.js`) with full transaction itemization.

### 3. 📊 Daily Dashboard (Dawase Dashboard)
- **💵 Dawase Net Sale Eka (Today's Net Sales):** Real-time daily net revenue (`Gross Sales - Return Deductions`).
- **🧾 Bill Gana (Total Bills Count):** Total completed transactions today.
- **🎁 Free Issues Giyapu Pekat Gana:** Total free issue packets given today.
- **🔄 Return Apu Gana:** Total return packets, with breakdown of Exchanged vs Bill Deductions.
- **💰 Commission Salary Accumulator:**
  - **Today's Net Commission:** Automatically adjusted for any return deductions.
  - **Cumulative Total Salary Balance:** Day-by-day running total across all recorded days in the database.
- **Today's Bills History Log:** Expandable transaction records showing gross sales, return deductions, net amount, and commission.

### 4. 📑 Reporting & PDF Export Module
- **Filter Periods:** Weekly (Last 7 Days), Monthly, Yearly, and All-Time.
- **Summary KPIs:** Gross Sales, Return Deductions, Net Sales, Commission Earned, Bill Count, Free Issues, Returns / Exchanges.
- **Item-Wise Sales Breakdown Table:** Aggregated quantities sold, free issues, returns, gross sales, return deductions, and net sales per item.
- **One-Click "DOWNLOAD PDF REPORT":** High-resolution, print-ready PDF report generated with `html2pdf.js`.

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
