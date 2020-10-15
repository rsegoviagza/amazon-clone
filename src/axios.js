import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-b13de.cloudfunctions.net/api", // THE API (cloud function) URL
  // "http://localhost:5001/challenge-b13de/us-central1/api"
});

export default instance;
