import axios from 'axios';

const API_URL = process.env.API_URL || 'http://localhost:3000/api/v1';

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'access-token': localStorage.accessToken,
    'token-type': localStorage.tokenType,
    client: localStorage.client,
    expiry: localStorage.expiry,
    uid: localStorage.uid,
  },
});
