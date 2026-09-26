"use client";

// MOCK AUTH — for local preview only.
//
// TODO: replace every function here with real Supabase Auth calls per
// Vishyx-Techie-Admin-Panel-Spec.md §3–5:
//   - login()   -> supabase.auth.signInWithPassword({ email, password })
//   - logout()  -> supabase.auth.signOut()
//   - isLoggedIn() -> check supabase.auth.getSession() server-side in
//                      middleware, not localStorage — this mock is NOT secure
//                      and must not ship to production.

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
