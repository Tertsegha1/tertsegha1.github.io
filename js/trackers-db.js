// ── Tracker Sync Database Configuration ─────────────────────────────────────
//
// SETUP (takes ~3 minutes):
//
//   1. Go to https://console.firebase.google.com
//   2. Open your existing project (or Create project → any name)
//   3. Left sidebar → Build → Realtime Database → Create database
//      → Choose region: europe-west1 → Start in LOCKED mode → Enable
//   4. Copy the database URL shown (e.g. https://your-project-rtdb.europe-west1.firebasedatabase.app)
//   5. Still in the console: Realtime Database → Rules → paste this and Publish:
//
//      {
//        "rules": {
//          ".read":  true,
//          ".write": true
//        }
//      }
//
//   6. Replace the databaseURL value below with YOUR URL, then push the file.
//
// SECURITY MODEL:
//   Data is stored at a path derived from a SHA-256 hash of your access code.
//   Without knowing the access code, the path is computationally unguessable.
//   The database rules allow open read/write because the path itself is the secret.
//   For maximum security, change your access code periodically.
//
// ─────────────────────────────────────────────────────────────────────────────

var TRACKER_DB = {
  databaseURL: 'REPLACE_WITH_YOUR_FIREBASE_RTDB_URL'
};
