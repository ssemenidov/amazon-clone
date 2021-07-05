import axios from 'axios';
console.log(process.env.NODE_ENV);
const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5001/clone-ce035/us-central1/api'
      : 'https://us-central1-clone-ce035.cloudfunctions.net/api',
});
export default instance;
