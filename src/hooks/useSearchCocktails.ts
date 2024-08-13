import {useEffect, useState} from "react";
import {IDrink} from "../interface.ts";

export const useSearchCocktails = () => {
    const [cocktails, setCocktails] = useState<IDrink[] >([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [cocktailName, setCocktailName] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`);
                const data = await response.json();
                setCocktails(data.drinks);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }

        };
        fetchData().catch(error => console.error("Error fetching data", error));
    }, [cocktailName]);

    return {searchCocktails: cocktails, searchLoading: loading, setSearchCocktailName: setCocktailName};

};