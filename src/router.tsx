import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {App} from "./components";
import LandingPage from "./components/LandingPage.tsx";
import SearchPage from "./components/SearchPage.tsx";
import CocktailDetailsPage from "./components/CocktailDetailsPage.tsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route index element={<LandingPage/>}/>
            <Route path="search" element={<SearchPage/>}/>
            <Route path="/cocktail/:cocktailId" element={<CocktailDetailsPage />} />
        </Route>
    )
)