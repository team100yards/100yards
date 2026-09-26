# 100 Yards — Website Deployment & Configuration Guide

## 1. How to Deploy / Update on GitHub Pages (100% Free)

1. Open your repository on GitHub: `team100yards/100yards`.
2. Click **Add file** → **Upload files**.
3. Drag and drop all the files from this directory:
   - `index.html` (Home with featured Software Suite & Match Center showcase)
   - `products.html` (Dedicated Software Products page with in-depth features & launch links)
   - `academy.html` (Academy & training info)
   - `team.html` (Interactive Match Center with Squads, Live Scores & Fixtures tabs)
   - `resources.html` (Featured Video Player, App Launch Portals & Instagram)
   - `contact.html` (Contact details)
   - `styles.css` (All design styling, product showcases, responsive tabs, and layouts)
   - `script.js` (Navigation logic)
   - `config.js` (Central configuration for all app links and video IDs)
   - `coach-app-preview.jpg` & `event-app-preview.jpg` (Product UI preview mockups)
   - `logo.png` & `pitch-bg.svg` (Assets)
4. Choose **Commit changes** directly to `main`.
5. Wait 1–2 minutes, then visit:
   **`https://team100yards.github.io/100yards/`**

---

## 2. Managing Your Software Product Links (`config.js`)

Your site links directly to both of your live web applications:
- **Coach Management System:** `https://coachmanagementsystem.web.app`
- **Football Event Managing System:** `https://football-event-managing-system.web.app`

Whenever you want to change links or add dedicated subpages, you only need to edit **`config.js`**:

```javascript
window.CONFIG = {
  // Software Products
  COACH_APP_URL: "https://coachmanagementsystem.web.app",
  EVENT_APP_URL: "https://football-event-managing-system.web.app",

  // Specific routes for each tab on the Match Center page:
  APP_URL: "https://football-event-managing-system.web.app",
  SCORES_URL: "https://football-event-managing-system.web.app",
  FIXTURES_URL: "https://football-event-managing-system.web.app",
  SQUADS_URL: "https://football-event-managing-system.web.app",

  // Add your YouTube video ID or full link
  FEATURED_VIDEO_ID: "HQSjogAmUxQ",
  FEATURED_VIDEO_TITLE: "PLAYER TRACKING SYSTEM ⚽️ Built by coaches, for coaches.",
};
```

---

## 3. How to Change or Add a YouTube Video

1. Upload your video to **YouTube** (under your channel `@team100yards`). You can set the video to **Public** or **Unlisted**.
2. Copy the video ID or the link:
   - Example ID: `HQSjogAmUxQ`
   - Or full link: `https://www.youtube.com/watch?v=HQSjogAmUxQ`
   - Or short link: `https://youtu.be/HQSjogAmUxQ`
3. Open **`config.js`** and set:
   ```javascript
   FEATURED_VIDEO_ID: "HQSjogAmUxQ",
   FEATURED_VIDEO_TITLE: "Your Video Title Here",
   ```
4. Save and upload **`config.js`** to GitHub. The video will immediately load on the website without editing any HTML!
