import React, {createContext, Dispatch, ReactNode} from 'react';
import {IDrink} from "../interface.ts";
import {useFetchHook} from "../hooks";

interface ICocktailContextProps {
    data: IDrink | null;
    moreData: IDrink[];
    isLoading: boolean;
    setTrigger: Dispatch<React.SetStateAction<boolean>>;
    setSearchQuery: Dispatch<React.SetStateAction<string>>;
}

export const CocktailContext = createContext<ICocktailContextProps | undefined>(undefined);

export const CocktailProvider: React.FC<{ children: ReactNode }> = ({children}) => {

    const {data, moreData, isLoading, setTrigger, setSearchQuery} = useFetchHook();


    return (
        <CocktailContext.Provider value={{
            data,
            isLoading,
            setTrigger,
            moreData,
            setSearchQuery,
        }}>
            {children}
        </CocktailContext.Provider>
    );
};


