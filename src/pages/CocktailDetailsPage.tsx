import React from "react";
import {useCocktail} from "../hooks/useCocktail.ts";
import {useGoHome} from "../hooks";

export const CocktailDetailsPage: React.FC = () => {
    const {data, isLoading} = useCocktail();
    const {goHome} = useGoHome();

    if (isLoading) {
        return <div>Loading...</div>;
    } else if (!data) {
        return <div>No cocktails found</div>
    }

    const measurementsCocktail = Object.entries(data)
        .filter(([key]) => key.startsWith("strMeasure"))
        .map(([key, value]) => ({key, value}));

    const ingredientsCocktail = Object.entries(data)
        .filter(([key]) => key.startsWith("strIngredient"))
        .map(([key, value]) => ({key, value}));


    return (
        <article className="cocktail-cocktailDetails-container">
            <div className="cocktail-details-info-container">
                <button onClick={goHome}>Home</button>
                <h2>Category: {data.strCategory}</h2>
                <img src={data.strDrinkThumb} alt={data.strDrink}/>
                <p><strong>Tags:</strong> {data.strTags}</p>
                <p><strong>Glas:</strong> {data.strGlass}</p>
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

