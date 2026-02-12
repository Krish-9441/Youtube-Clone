import axios from "axios";

export const BASE_URL = "https://www.googleapis.com/youtube/v3";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, {
      params: {
        key: API_KEY,     // ⭐ REQUIRED
        maxResults: 50
      }
    });

    return data;
  } catch (error) {
    console.error("YouTube API Error:", error.response?.data || error.message);
    return null;
  }
};
