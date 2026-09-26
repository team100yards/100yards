/**
 * 100 Yards — Central Configuration File
 * 
 * Edit links and video IDs in this file to update the website without touching HTML.
 */
window.CONFIG = {
  // Software Products
  COACH_APP_URL: "https://coachmanagementsystem.web.app",
  EVENT_APP_URL: "https://football-event-managing-system.web.app",

  // Football Event Managing System (Firebase Web App)
  APP_URL: "https://football-event-managing-system.web.app",
  
  // Specific subroutes (if your app has dedicated pages/tabs, update them here)
  SCORES_URL: "https://football-event-managing-system.web.app",
  FIXTURES_URL: "https://football-event-managing-system.web.app",
  SQUADS_URL: "https://football-event-managing-system.web.app",
  
  // 100 Yards YouTube Video ID or embed URL (e.g., 'dQw4w9WgXcQ' or full URL)
  // Replace with your YouTube Video ID (found in youtube.com/watch?v=VIDEO_ID)
  FEATURED_VIDEO_ID: "", // e.g. "your_video_id"
  FEATURED_VIDEO_TITLE: "100 Yards — Training Drills & Match Highlights",
  
  // Contact & Social Links
  EMAIL: "100yards@proton.me",
  PHONE: "+91 99064 55143",
  INSTAGRAM_URL: "https://www.instagram.com/team100yards/",
  YOUTUBE_URL: "https://www.youtube.com/@team100yards",
  FACEBOOK_URL: "https://www.facebook.com/Team100Yards",
  X_URL: "https://x.com/team100yards"
};

// Backwards compatibility for existing team page
window.TEAM_LINK = window.CONFIG.APP_URL;
