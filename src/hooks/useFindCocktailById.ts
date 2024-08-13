import {useEffect, useState} from "react";
import {IDrink} from "../interface.ts";

export const useFindCocktailById = (cocktailId: string) => {
    const [cocktail, setCocktail] = useState<IDrink | null>(null);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`);
                const data = await response.json();
                setCocktail(data.drinks[0]);
            } catch (error) {
                console.error("Failed to fetch cocktail:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData().catch(error => console.error("error fetching data", error));
    }, [cocktailId]);

    return {cocktail: cocktail, loadingCocktailId: loading}
}