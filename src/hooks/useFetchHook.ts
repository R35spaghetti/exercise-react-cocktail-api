import {useEffect, useState} from "react";
import {IDrink} from "../interface.ts";
import {useLocation, useParams} from "react-router-dom";

export const useFetchHook = () => {
    const [data, setData] = useState<IDrink | null>(null);
    const [moreData, setMoreData] = useState<IDrink[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [trigger, setTrigger] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const {cocktailId} = useParams();
    const location = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            let url = '';
            try {
                switch (true) {
                    case location.pathname === "/":
                        url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
                        break;
                    case location.pathname === "/search":
                        url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`;
                        break;
                    case location.pathname === `/cocktail/${cocktailId}`:
                        url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`;
                        break;
                    default:
                        break;

                }
                const response = await fetch(url);
                const moreData = await response.json();
                setMoreData(moreData.drinks);
                setData(moreData.drinks[0]);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsLoading(false)
            }
        };
        fetchData().catch(error => console.error("Error fetching data", error));
        return () => {
            setData(null);
            setMoreData([]);
            setIsLoading(true)
        };
    }, [trigger, location, cocktailId, searchQuery]);
    return {data, moreData, isLoading, setTrigger, setSearchQuery};
};
