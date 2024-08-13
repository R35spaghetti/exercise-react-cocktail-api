import React from "react";
import {useCocktail} from "../hooks/useCocktail.ts";
import {useNavigate} from "react-router-dom";

export const LandingPage: React.FC = () => {
    const {randomCocktail, randomLoading, setRandomTrigger} = useCocktail();
    const navigate = useNavigate();

    if (randomLoading) {
        return <div>Loading...</div>;
    } else if (!randomCocktail) {
        return <div>No cocktail found</div>
    }
    const goSearch = () => {
        navigate("/search");
    }
    const goSeeMore = () => {
        navigate(`/cocktail/${randomCocktail.idDrink}`);
    }

    return (
        <article className="landing-page">
            <h1>{randomCocktail.strDrink}</h1>
            <img src={randomCocktail.strDrinkThumb} alt={randomCocktail.strDrink}/>
            <button onClick={() => setRandomTrigger(prev => !prev)}>Get another drink</button>
            <button onClick={goSeeMore}>See more</button>
            <button onClick={goSearch}>Search</button>
        </article>
    );
};
