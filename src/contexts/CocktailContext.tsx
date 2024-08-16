import React, {createContext, Dispatch, ReactNode, useEffect, useState} from 'react';
import {IDrink} from "../interface.ts";
import {useFetchHook} from "../hooks";

interface ICocktailContextProps {
    data: IDrink | null;
    moreData: IDrink[];
    isLoading: boolean;
    setTrigger: Dispatch<React.SetStateAction<boolean>>;
    setSearchQuery: Dispatch<React.SetStateAction<string>>;
    favorites: IDrink[];
    setFavorites: Dispatch<React.SetStateAction<IDrink[]>>;
    addToFavorites: (drink: IDrink) => void;
    removeFromFavorites: (drink: string) => void;

}


export const CocktailContext = createContext<ICocktailContextProps | undefined>(undefined);

export const CocktailProvider: React.FC<{ children: ReactNode }> = ({children}) => {

    const {data, moreData, isLoading, setTrigger, setSearchQuery} = useFetchHook();

    const [favorites, setFavorites] = useState<IDrink[]>([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);


    const addToFavorites = (drink: IDrink) => {
        const duplicate = favorites.some(favorites => favorites.idDrink === drink.idDrink);
        if (!duplicate) {
            setFavorites((prevFavorites) => [...prevFavorites, drink]);
        }
    };

    const removeFromFavorites = (drinkId: string) => {
        const updatedFavorites = favorites.filter(drink => drink.strDrink !== drinkId);
        const updatedFavoritesString = JSON.stringify(updatedFavorites);
        localStorage.setItem('favorites', updatedFavoritesString);
        setFavorites(updatedFavorites);

    };


    return (
        <CocktailContext.Provider value={{
            data,
            isLoading,
            setTrigger,
            moreData,
            setSearchQuery,
            favorites,
            setFavorites,
            addToFavorites,
            removeFromFavorites
        }}>
            {children}
        </CocktailContext.Provider>
    );
};


