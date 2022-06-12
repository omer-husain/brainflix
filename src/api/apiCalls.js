import axios from "axios";
let API_PORT = 8080;

const BASE_URL = `http://localhost:${API_PORT}`;

async function getVideos() {
  let query = `${BASE_URL}/videos/`;
  try {
    let response = await axios.get(query);
    return response;
  } catch (err) {
    console.error("Error Axios call on getVideos didn't work: ", err);
  }
}

async function getVideoWithId(videoId) {
  let query = `${BASE_URL}/videos/${videoId}`;
  try {
    let response = await axios.get(query);
    return response;
  } catch (err) {
    console.error("Error Axios call on  getVideoWithId didn't work: ", err);
  }
}

async function postVideo(payload) {
  let query = `${BASE_URL}/videos/`;
  try {
    let response = await axios.post(query, payload);
    return response;
  } catch (err) {
    console.error("Error Axios call for Post didn't work: ", err);
  }
}

export { getVideos, getVideoWithId, postVideo };
