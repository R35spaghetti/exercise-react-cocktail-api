import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {App} from "./components";
import {LandingPage, SearchPage, CocktailDetailsPage} from "./pages";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route index element={<LandingPage/>}/>
            <Route path="search" element={<SearchPage/>}/>
            <Route path="/cocktail/:cocktailId" element={<CocktailDetailsPage />} />
        </Route>
    )
)