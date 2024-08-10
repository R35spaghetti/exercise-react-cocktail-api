import React, { createContext, ReactNode } from 'react';
import useFetchRandomCocktail from '../hooks/useFetchRandomCocktail';
import {IDrink} from "../interface.ts";

interface ICocktailContextProps {
    cocktail: IDrink | null;
    loading: boolean;
}

export const CocktailContext = createContext<ICocktailContextProps | undefined>(undefined);

export const CocktailProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { cocktail, loading } = useFetchRandomCocktail();

    return (
        <CocktailContext.Provider value={{ cocktail, loading }}>
            {children}
        </CocktailContext.Provider>
    );
};


