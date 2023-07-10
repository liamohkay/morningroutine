import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_REACT_APP_YT_CLIENT_ID}>
        <GoogleLogin 
          onSuccess={(resp: any) => console.log(resp)}
          onError={() => console.log('Login Failed')}
        />
      </GoogleOAuthProvider>
    </>
  )
}

export default App
