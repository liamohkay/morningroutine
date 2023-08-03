import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v/playlistItems',
  params: {
    part: 'snippet',
    key: import.meta.env.VITE_REACT_APP_YT_CLIENT_ID,
    mine: true,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE, OPTIONS',
  },
})