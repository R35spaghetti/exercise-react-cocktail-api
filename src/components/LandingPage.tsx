import React from "react";
import {useCocktail} from "../hooks/useCocktail.ts";
import {Link} from "react-router-dom";

const LandingPage: React.FC = () => {
    const {randomCocktail, randomLoading, setRandomTrigger} = useCocktail();

    if (randomLoading) {
        return <div>Loading...</div>;
    } else if (!randomCocktail) {
        return <div>No cocktail found</div>
    }

    return (
        <article className="landing-page">
            <h1>{randomCocktail.strDrink}</h1>
            <img src={randomCocktail.strDrinkThumb} alt={randomCocktail.strDrink}/>
            <button onClick={() => setRandomTrigger(prev => !prev)}>Get another drink</button>
            <Link to={`/cocktail/${randomCocktail.idDrink}`}>See more</Link>
        </article>
    );
};
export default LandingPage;