import { RouterProvider } from 'react-router-dom';
import router from './router/Router';
import './App.css'
// import { useEffect, useRef } from 'react';

export default function App() {

  // useEffect(() => {
  //   localStorage.setItem('token', '')
  // }, [])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
