import {CocktailProvider} from "../contexts/CocktailContext.tsx";
import {Outlet} from "react-router-dom";

export function App() {
    return (
        <CocktailProvider>
            <Outlet/>
        </CocktailProvider>
    );
}
