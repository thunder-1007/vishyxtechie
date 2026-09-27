"use client";

// MOCK AUTH — for local preview only.
//
// TODO: replace every function here with real Appwrite Auth calls per
// Vishyx-Techie-Admin-Panel-Spec.md §3–5:
//   - login()   -> account.createEmailPasswordSession(email, password)
//   - logout()  -> account.deleteSession('current')
//   - isLoggedIn() -> check account.get() server-side in middleware, not
//                      localStorage — this mock is NOT secure and must not
//                      ship to production.
// (using the Appwrite Node/Web SDK's `Account` service)

const KEY = "vishyx-admin-mock-session";

export function login(email) {
  window.localStorage.setItem(KEY, email);
}

export function logout() {
  window.localStorage.removeItem(KEY);
}

export function getSession() {
  try {
    return window.localStorage.getItem(KEY);
  } catch {
    return null;
  }
}
