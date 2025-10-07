// src/api/fetchBanner.js
import { BANNER_URL } from "../config/env";

export async function fetchPromoBannerData() {
  const url = BANNER_URL; /* hardcoded for demo purposes */

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch promotion banner data");
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("❌ fetchPromoBannerData error:", error);
    return null;
  }
}
