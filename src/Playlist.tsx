import yt from './youtube.ts';

const Playlist = () => {
  
  const handleClick = () => {
    yt.get('/playlist')
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