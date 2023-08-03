import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import { ClerkProvider, SignedIn, SignedOut, SignIn,  SignUp, RedirectToSignIn } from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";


if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();
  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        <Route
          path="/"
          element={
          <>
            <SignedIn>
              <GoogleLogin 
                auto_select
                onSuccess={(resp: any) => console.log(resp)}
                onError={() => console.log('Login Failed')}
              />
              <App />
            </SignedIn>
             <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
          }
        />
        <Route
          path="/sign-in/*"
          element={<SignIn routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
      </Routes>
    </ClerkProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_REACT_APP_YT_CLIENT_ID}>
        <ClerkProviderWithRoutes />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
