import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, HashRouter} from 'react-router-dom';
import LoginController from './Login/Controllers/login-controller';
import HomeProfile from './Profile/views/profile-views';
import HomeView from './home/views/home-view';
import { GoogleOAuthProvider } from '@react-oauth/google';
import HomeController from './home/controllers/home-controller';
import ProfileController from './Profile/controllers/profile-controller';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <GoogleOAuthProvider clientId="798550339304-t9c6dq7qn2dr9bl2vj6n7l2dpr5opu20.apps.googleusercontent.com">
    <HashRouter>
      <Routes>
        <Route path="/" element={<LoginController/>} />
        <Route path="/home" element={<HomeController/>} />
        <Route path="/profile" element={<ProfileController/>}/>
      </Routes>
    </HashRouter>
  </GoogleOAuthProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
