import React, {createContext, Dispatch, ReactNode, SetStateAction} from 'react';
import useFetchRandomCocktail from '../hooks/useFetchRandomCocktail';
import {IDrink} from "../interface.ts";

interface ICocktailContextProps {
    cocktail: IDrink | null;
    loading: boolean;
    setTrigger: Dispatch<SetStateAction<boolean>>;
}

export const CocktailContext = createContext<ICocktailContextProps | undefined>(undefined);

export const CocktailProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const {cocktail, loading, setTrigger} = useFetchRandomCocktail();

    return (
        <CocktailContext.Provider value={{cocktail, loading, setTrigger}}>
            {children}
        </CocktailContext.Provider>
    );
};


