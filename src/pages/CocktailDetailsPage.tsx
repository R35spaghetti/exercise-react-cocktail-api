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
        <article className="cocktail-cocktailDetails-container">
            <div className="cocktail-details-info-container">
                <button onClick={goHome}>Home</button>
                <h2>Category: {cocktail.strCategory}</h2>
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
                <p><strong>Tags:</strong> {cocktail.strTags}</p>
                <p><strong>Glas:</strong> {cocktail.strGlass}</p>
            </div>
            <h3>Ingredients</h3>
            <section className="cocktail-details-recipe-container">
                <div className="cocktail-details-ingredients-list-container">
                    {ingredientsCocktail.map((entry) => (<p key={entry.key}>{entry.value}</p>))}
                </div>
                <div className="cocktail-details-measurements-list-container">
                    {measurementsCocktail.map((entry) => (<p key={entry.key}>{entry.value}</p>))}
                </div>
            </section>

        </article>


    )
}

