// Python Academy — Firebase configuration
//
// This is a dedicated Firebase project for Python Academy, kept separate from
// the AUKTIE/CWR workshop's Firebase project (firebase-config.js / CWR_FIREBASE).
//
// Project:  python-academy-tja26 (Blaze plan — required for Firebase Authentication)
// Console:  https://console.firebase.google.com/project/python-academy-tja26/overview
// Database: python-academy-tja26-default-rtdb (europe-west1)
//
// Realtime Database rules: open write for students (no login system for them —
// just a username/password app-level account), but list-reads of passcodes,
// the full student roster, messages and feedback require a signed-in instructor
// (Firebase Authentication). Single-record lookups (one username, one passcode)
// stay open since students need those during registration/login without an
// instructor-grade login of their own.
//
// The apiKey below is not a secret — it just identifies this project to
// Firebase's client SDK. Real access control comes from the database rules
// plus Firebase Authentication, not from hiding this value.

var PYAC_FIREBASE = {
  apiKey: "AIzaSyB9_Y9x6egMxdTJRvbHHS_UkIobhvP9uI0",
  authDomain: "python-academy-tja26.firebaseapp.com",
  databaseURL: "https://python-academy-tja26-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "python-academy-tja26",
  appId: "1:524801252542:web:380902418dccadf6a8d2ef"
};
