import React from "react";
import {useCocktail} from "../hooks/useCocktail.ts";

const LandingPage: React.FC = () => {
    const {cocktail, loading, setTrigger} = useCocktail();

    if (loading) {
        return <div>Loading...</div>;
    } else if (!cocktail) {
        return <div>No cocktail found</div>
    }

    return (
        <article className="landing-page">
            <h1>{cocktail.strDrink}</h1>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
            <button onClick={() => setTrigger(prev => !prev)}>Get another drink</button>
        </article>
    );
};
export default LandingPage;