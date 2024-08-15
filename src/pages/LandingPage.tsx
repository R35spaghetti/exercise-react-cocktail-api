import React from "react";
import {useCocktail} from "../hooks/useCocktail.ts";
import {useNavigate} from "react-router-dom";
import {useLoadingData} from "../hooks/useLoadingData.ts";

export const LandingPage: React.FC = () => {
    const {data, isLoading, setTrigger} = useCocktail();
    const navigate = useNavigate();
    const {condition} = useLoadingData(isLoading,data);

    if (!data) {
        return <div>{condition}</div>;
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
