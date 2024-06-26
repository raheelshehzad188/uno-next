"use client";

export function getCurrentLang() {
  return localStorage.getItem("i18nextLng") ?? "en";
}
