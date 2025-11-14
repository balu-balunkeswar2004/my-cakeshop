import React from 'react'
import '/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import MainContainer from './components/maincontainer/MainContainer'
import Boys from './components/maincontainer/pages/Boys'



const App = () => {
    const paths = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <MainContainer />,
                },

                {
                    path: "/boys",
                    element: <Boys/>
                },


            ]
        }
    ])
    return (

        <RouterProvider router={paths} />
    )
}

export default App
