import {CocktailProvider} from "../contexts/CocktailContext.tsx";
import LandingPage from "./LandingPage.tsx";

export function App() {
    return (
        <CocktailProvider>
            <LandingPage/>
        </CocktailProvider>
    );
}
