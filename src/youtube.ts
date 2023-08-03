import axios from 'axios';

export default axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3/playlists',
  params: {
    'Access-Control-Allow-Origin': '*',
    part: 'snippet',
    key: import.meta.env.VITE_REACT_APP_YT_CLIENT_ID,
    mine: true,
  },
})