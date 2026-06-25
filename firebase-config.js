// CWR Workshop — Firebase Realtime Database configuration
//
// SETUP (one-time, takes ~5 minutes):
//   1. Go to https://console.firebase.google.com
//   2. Click "Add project" → give it a name (e.g. "cwr-workshop") → Continue
//   3. Disable Google Analytics if prompted → Create project
//   4. In the left sidebar: Build → Realtime Database → Create database
//   5. Choose a region (e.g. europe-west1) → Start in TEST mode → Enable
//   6. Copy the database URL shown (looks like: https://cwr-workshop-XXXXX-default-rtdb.europe-west1.firebasedatabase.app)
//   7. Replace the databaseURL value below with your URL
//   8. Commit and push:
//        cd C:\Users\terts\Downloads\portfolio-site
//        git add firebase-config.js && git commit -m "Add Firebase config" && git push
//
// NOTE: Test mode rules allow open read/write for 30 days — enough for any workshop.
// The only data stored is participant names + which puzzles they marked complete/failed.

var CWR_FIREBASE = {
  databaseURL: "https://auktie2026-postgresql-workshop-default-rtdb.europe-west1.firebasedatabase.app"
};
