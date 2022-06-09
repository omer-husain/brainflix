import axios from "axios";
let API_PORT = 8080;

const BASE_URL = `http://localhost:${API_PORT}`;

function getVideos() {
  let query = `${BASE_URL}/videos/`;
  let response = axios.get(query);
  return response;
}

function getVideoWithId(videoId) {
  let query = `${BASE_URL}/videos/${videoId}`;
  let response = axios.get(query);
  return response;
}

function postVideo(payload) {
  let query = `${BASE_URL}/videos/`;
  let response = axios.post(query, payload);
  return response;
}

export { getVideos, getVideoWithId, postVideo };
