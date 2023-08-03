// import yt from './youtube.ts';
import axios from 'axios';
const Playlist = () => {
  
  const handleClick = () => {
    let params = {
      'Access-Control-Allow-Origin': '*',
      part: 'snippet',
      key: import.meta.env.VITE_REACT_APP_YT_CLIENT_ID,
      mine: true,
    }
    axios.get('https://youtube.googleapis.com/youtube/v3/playlists', { params })
      .then(resp => console.log(resp.data))
      .catch(err => console.error(err))
  }

  return (
    <>
      <button onClick={handleClick}>
        Click Me Bitch
      </button>
    </>
  )
}

export default Playlist;