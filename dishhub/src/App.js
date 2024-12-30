import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from "./components/root/Root";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import Auth from "./pages/Auth";
import AuthorProfile from "./pages/AuthorProfile";

export default function App (){

    const appRouter = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="recipe-detail" element={<RecipeDetail />}/>
            <Route path="author-profile" element={<AuthorProfile  />}/>
            <Route path="auth" element={<Auth />} />
        </Route>
    ))

    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    )
}