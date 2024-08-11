import React, {createContext, ReactNode} from 'react';
import useFetchRandomCocktail from '../hooks/useFetchRandomCocktail';
import {IDrink} from "../interface.ts";
import useSearchCocktails from "../hooks/useSearchCocktails.ts";

interface ICocktailContextProps {
    randomCocktail: IDrink | null;
    randomLoading: boolean;
    setRandomTrigger: React.Dispatch<React.SetStateAction<boolean>>;

    searchCocktails: IDrink[];
    searchLoading: boolean;
    setSearchCocktailName: React.Dispatch<React.SetStateAction<string>>;

}

export const CocktailContext = createContext<ICocktailContextProps | undefined>(undefined);

export const CocktailProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const {randomCocktail,randomLoading,setRandomTrigger} = useFetchRandomCocktail();
    const{searchCocktails, searchLoading,setSearchCocktailName} = useSearchCocktails();

    return (
        <CocktailContext.Provider value={{randomCocktail, randomLoading, setRandomTrigger, searchCocktails, searchLoading, setSearchCocktailName}}>
            {children}
        </CocktailContext.Provider>
    );
};


