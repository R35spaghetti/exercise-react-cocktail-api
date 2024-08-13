import React, {createContext, Dispatch, ReactNode} from 'react';
import {useSearchCocktails,useFindCocktailById,useFetchRandomCocktail} from "../hooks/";
import {IDrink} from "../interface.ts";

import {useParams} from "react-router-dom";

interface ICocktailContextProps {
    randomCocktail: IDrink | null;
    randomLoading: boolean;
    setRandomTrigger: Dispatch<React.SetStateAction<boolean>>;

    searchCocktails: IDrink[];
    searchLoading: boolean;
    setSearchCocktailName: Dispatch<React.SetStateAction<string>>;

    cocktail: IDrink | null;
    loadingCocktailId: boolean;

}

export const CocktailContext = createContext<ICocktailContextProps | undefined>(undefined);

export const CocktailProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const {randomCocktail, randomLoading, setRandomTrigger} = useFetchRandomCocktail();
    const {searchCocktails, searchLoading, setSearchCocktailName} = useSearchCocktails();
    const {cocktailId} = useParams();
    const {cocktail, loadingCocktailId} = useFindCocktailById(cocktailId || '');

    return (
        <CocktailContext.Provider value={{
            randomCocktail,
            randomLoading,
            setRandomTrigger,
            searchCocktails,
            searchLoading,
            setSearchCocktailName,
            cocktail,
            loadingCocktailId
        }}>
            {children}
        </CocktailContext.Provider>
    );
};


