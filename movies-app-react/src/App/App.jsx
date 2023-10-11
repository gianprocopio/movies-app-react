import { useRoutes, BrowserRouter } from "react-router-dom"
import React from 'react'
import Home from '../Routes/Home'
import Trends from "../Routes/Trends"
import Categories from "../Routes/Categories"
import Movies from "../Routes/Movies"
import Navbar from "../Components/Navbar"

const AppRoutes = () =>{
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/trends",
      element: <Trends />
    },
    {
      path: "/categories",
      element: <Categories />
    },
    {
      path: "/movies",
      element: <Movies />
    },
  ])

  return routes;
}

function App() {
  
  
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  )
}

export default App
