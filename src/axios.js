import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-clone-ce035.cloudfunctions.net/api',
});
export default instance;
