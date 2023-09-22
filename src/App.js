import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import Interface from './Components/Interface';
import Home from './Components/Home';
import About from './Components/AboutMe';
import Project from './Components/Project';
import Contact from './Components/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Interface />}>
      <Route index  element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='project' element={<Project />} />
      <Route path='contact' element={<Contact  />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
