import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {App} from "./components";
import {LandingPage, SearchPage, CocktailDetailsPage} from "./pages";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import {FavoritesPage} from "./pages/FavoritesPage.tsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route index element={<LandingPage/>}/>
            <Route path="search" element={<SearchPage/>}/>
            <Route path="favorites" element={<FavoritesPage/>}/>
            <Route path="/cocktail/:cocktailId" element={<CocktailDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Route>
    )
)