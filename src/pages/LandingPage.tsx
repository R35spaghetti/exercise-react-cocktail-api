import React from "react";
import {useCocktail} from "../hooks/useCocktail.ts";
import {useNavigate} from "react-router-dom";

export const LandingPage: React.FC = () => {
    const {data, isLoading, setTrigger} = useCocktail();
    const navigate = useNavigate();


    if (isLoading) {
        return <div>Loading...</div>;
    } else if (!data) {
        return <div>No cocktail found</div>
    }
    const goSearch = () => {
        navigate("/search");
    }
    const goSeeMore = () => {
        navigate(`/cocktail/${data.idDrink}`);
    }

    return (
        <article className="cocktail-cocktailLanding-container">
            <h1>{data.strDrink}</h1>
            <img src={data.strDrinkThumb} alt={data.strDrink}/>
            <button onClick={() => setTrigger(prev => !prev)}>Get another drink</button>
            <button onClick={goSeeMore}>See more</button>
            <button onClick={goSearch}>Search</button>
        </article>
    );
};
