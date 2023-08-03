import { GoogleLogin } from '@react-oauth/google';
import Playlist from './Playlist.tsx';

const App = () => {
  return (
    <>
      <GoogleLogin 
        onSuccess={(resp: any) => console.log(resp)}
        onError={() => console.log('Login Failed')}
      />
      <Playlist />
    </>
  )
}

export default App
