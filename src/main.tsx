import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
			<BrowserRouter>
				<GoogleOAuthProvider clientId={import.meta.env.VITE_REACT_APP_YT_CLIENT_ID}>
					<App />
				</GoogleOAuthProvider>
			</BrowserRouter>
	</React.StrictMode>,
);

