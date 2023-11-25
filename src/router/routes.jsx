import React from 'react'
import CarouselsPage from "../pages/carousels-page";
import App from '../App';
import CarouselAdd from '../pages/carousel-add';

export const routes = {
  path: '/',
  element: (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ),
  children: [
    {
      path: '/',
      element: <CarouselsPage />
    },
    {
      path: '/carousel/add',
      element: <CarouselAdd />
    }
  ]
}