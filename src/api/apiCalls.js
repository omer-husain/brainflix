import axios from "axios";
import apiKey from "../data/api-key.json";

const BASE_URL = `https://project-2-api.herokuapp.com`;
const API_KEY = apiKey.api_key;
const API_QUERY = `?api_key=${API_KEY}`;

function getVideos() {
  let query = `${BASE_URL}/videos/${API_QUERY}`;
  let response = axios.get(query);
  return response;
}

function getVideoWithId(videoId) {
  let query = `${BASE_URL}/videos/${videoId}${API_QUERY}`;
  let response = axios.get(query);
  return response;
}

export { getVideos, getVideoWithId };
