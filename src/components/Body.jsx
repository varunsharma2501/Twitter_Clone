import React from 'react';
import Home from './Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from './Feed';
import Profile from './Profile';
import Login from './Login';
import SignUp from './Signup';
import ProtectRoute from './ProtectRoute';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <ProtectRoute />, // ProtectRoute is used here
            children: [
                {
                    path: "",
                    element: <Home />, // Home should be here as the main element
                    children: [
                        {
                            path: "",
                            element: <Feed />
                        },
                        {
                            path: "profile/:id",
                            element: <Profile />
                        }
                    ]
                }
            ]
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/signup",
            element: <SignUp />
        },
    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
}

export default Body;
