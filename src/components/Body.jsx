import React from 'react'
import Home from './Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from './Feed';
import Profile from './Profile';
import Login from './Login';
import SignUp from './Signup';

const Body=()=>{
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Home/>,
            children:[{
                path:"",
                element:<Feed/>
            },{
                path:"profile",
                element:<Profile/>
            }
            ]
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/signup",
            element:<SignUp/>
        }
    ])

    return(
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body
