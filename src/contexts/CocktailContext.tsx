import React, {createContext, Dispatch, ReactNode} from 'react';
import useFetchRandomCocktail from '../hooks/useFetchRandomCocktail';
import {IDrink} from "../interface.ts";
import useSearchCocktails from "../hooks/useSearchCocktails.ts";
import useFindCocktailById from "../hooks/useFindCocktailById.ts";

interface ICocktailContextProps {
    randomCocktail: IDrink | null;
    randomLoading: boolean;
    setRandomTrigger: Dispatch<React.SetStateAction<boolean>>;

    searchCocktails: IDrink[];
    searchLoading: boolean;
    setSearchCocktailName: Dispatch<React.SetStateAction<string>>;

    cocktail: IDrink | null;
    loadingCocktailId: boolean;
    cocktailId: Dispatch<number>;

}

export const CocktailContext = createContext<ICocktailContextProps | undefined>(undefined);

export const CocktailProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const {randomCocktail,randomLoading,setRandomTrigger} = useFetchRandomCocktail();
    const{searchCocktails, searchLoading,setSearchCocktailName} = useSearchCocktails();
    const {cocktail, loadingCocktailId, cocktailId} = useFindCocktailById();

    return (
        <CocktailContext.Provider value={{randomCocktail, randomLoading, setRandomTrigger, searchCocktails, searchLoading, setSearchCocktailName, cocktail, loadingCocktailId, cocktailId}}>
            {children}
        </CocktailContext.Provider>
    );
};


