import React from 'react';  
import { createRoot } from 'react-dom/client';
import Appp from './Appp';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home';
import CountryDetails from './components/CountryDetails';
const router=createBrowserRouter([
{
    path:'/',
    element:<Appp />,
    children:[
{
    path:'/',
    element:<Home />
},
{
    path:'/:country',
    element:<CountryDetails />
}
    ]
}, 

])

const root = createRoot(document.querySelector('#root'));
root.render(
< RouterProvider router={router}/>
)
