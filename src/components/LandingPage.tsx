import React from "react";
import {useCocktail} from "../hooks/useCocktail.ts";

const LandingPage: React.FC = () => {
    const {cocktail, loading} = useCocktail();

    if (loading) {
        return <div>Loading...</div>;
    } else if (!cocktail) {
        return <div>No cocktail found</div>
    }

    return (
        <div>
            <h1>{cocktail.strDrink}</h1>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
        </div>
    );
};
export default LandingPage;