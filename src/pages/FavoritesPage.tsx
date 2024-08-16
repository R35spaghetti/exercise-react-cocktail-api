import React from 'react';
import {useCocktail} from "../hooks";
import {useGoHome} from "../hooks";

export const FavoritesPage: React.FC = () => {
    const {favorites, removeFromFavorites} = useCocktail();
    const {goHome} = useGoHome();

    return (
        <div>
            <h2>Favorite Cocktails</h2>
            <button onClick={goHome}>Home</button>
            {favorites.map((favorite) => (
                <div key={favorite.idDrink}>
                    <p>{favorite.strDrink}</p>
                    <button onClick={() => removeFromFavorites(favorite.strDrink)}>Remove from Favorites</button>
                </div>
            ))}
        </div>
    );
}
