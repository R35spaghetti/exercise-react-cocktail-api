import React from "react";
import {useCocktail} from "../hooks";
import {useGoHome} from "../hooks";
import {useLoadingData} from "../hooks";

export const CocktailDetailsPage: React.FC = () => {
    const {data, isLoading, addToFavorites} = useCocktail();
    const {goHome} = useGoHome();
    const {condition} = useLoadingData(isLoading,data);

    if (!data) {
        return <div>{condition}</div>;
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
                <button onClick={() => addToFavorites(data)}>Add to Favorites</button>
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

