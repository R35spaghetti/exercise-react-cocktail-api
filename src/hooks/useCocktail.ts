import {useContext} from "react";
import {CocktailContext} from "../contexts/CocktailContext.tsx";

export const useCocktail = () => {
    const context = useContext(CocktailContext);

    if (!context) {
        throw new Error('useCocktail must be used within a CocktailProvider');
    }
    return context;
};