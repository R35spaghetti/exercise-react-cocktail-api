import React from "react";
import {useCocktail} from "../hooks/useCocktail.ts";
import {useGoHome} from "../hooks";

export const CocktailDetailsPage: React.FC = () => {
    const {cocktail, loadingCocktailId} = useCocktail();
    const {goHome} = useGoHome();

    if (loadingCocktailId) {
        return <div>Loading...</div>;
    } else if (!cocktail) {
        return <div>No cocktails found</div>
    }

    const measurementsCocktail = Object.entries(cocktail)
        .filter(([key]) => key.startsWith("strMeasure"))
        .map(([key, value]) => ({key, value}));

    const ingredientsCocktail = Object.entries(cocktail)
        .filter(([key]) => key.startsWith("strIngredient"))
        .map(([key, value]) => ({key, value}));


    return (
        <article className="cocktail-card">
            <h2>category: {cocktail.strCategory}</h2>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
            <p>tags: {cocktail.strTags}</p>
            <p>glas: {cocktail.strGlass}</p>
            <h3>Ingredients:</h3>
            <div className="ingredients-list">
                {measurementsCocktail.map((entry) => (<p key={entry.key}>{entry.value}</p>))}
                {ingredientsCocktail.map((entry) => (<p key={entry.key}>{entry.value}</p>))}
            </div>
            <button onClick={goHome}>Home</button>

        </article>


    )
}

