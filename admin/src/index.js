import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { ListContextProvider } from './context/listContext/ListContext';
import { MovieContextProvider } from './context/movieContext/MovieContext';
import { UserContextProvider } from './context/userContext/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider >
      <UserContextProvider>
        <MovieContextProvider>
          <ListContextProvider>
            <App />
          </ListContextProvider>
        </MovieContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);