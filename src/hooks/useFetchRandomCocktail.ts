import {useEffect, useState} from "react";
import {IDrink} from "../interface.ts";

const useFetchRandomCocktail = () => {
    const [cocktail, setCocktail] = useState<IDrink | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [trigger, setTrigger] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
                const data = await response.json();
                setCocktail(data.drinks[0]);
            } catch (error) {
                console.error("Failed to fetch cocktail:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData().catch(error => console.error("error fetching data", error));
    }, [trigger]);

    return {cocktail, loading, setTrigger};
};
export default useFetchRandomCocktail;