import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {App} from "./components";
import LandingPage from "./components/LandingPage.tsx";
import SearchPage from "./components/SearchPage.tsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route index element={<LandingPage/>}/>
            <Route path="search" element={<SearchPage/>}/>
        </Route>
    )
)