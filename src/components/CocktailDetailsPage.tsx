import React from "react";
import {useCocktail} from "../hooks/useCocktail.ts";

const CocktailDetailsPage: React.FC = () => {
    const {cocktail, loadingCocktailId} = useCocktail();


    if (loadingCocktailId) {
        return <div>Loading...</div>;
    } else if (!cocktail) {
        return <div>No cocktails found</div>
    }
    return (
        <article className="cocktail-card">
            <h2>{cocktail.strDrink}</h2>
            <p>{cocktail.strInstructions}</p>
        </article>


    )
}
export default CocktailDetailsPage;