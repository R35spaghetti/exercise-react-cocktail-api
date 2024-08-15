import {IDrink} from "../interface.ts";
import {useEffect, useState} from "react";

export const useLoadingData = (loading: boolean, data: IDrink | null) => {
    const [condition, setCondition] = useState("");

    useEffect(() => {
        if (loading) {
            setCondition("Loading...");
        } else if (!data) {
             setCondition("No cocktail found");

        }
    },[loading, data]);

  return {condition: condition};
}