import React, {useState} from "react";
import {useCocktail} from "../hooks/useCocktail.ts";
import {Link} from "react-router-dom";
import {useGoHome} from "../hooks";

export const SearchPage: React.FC = () => {
    const {searchCocktails, searchLoading, setSearchCocktailName} = useCocktail();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const itemsPerPage = 10;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearchCocktailName(searchQuery);
    };
    const handleChangePage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = searchCocktails.slice(indexOfFirstItem, indexOfLastItem);
    const {goHome} = useGoHome();


    if (searchLoading) {
        return <div>Loading...</div>;
    } else if (!searchCocktails || searchCocktails.length === 0) {
        return <div>No cocktails found</div>
    }

    return (
        <article className="cocktail-cocktailSearch-container">
            <button onClick={goHome}>Home</button>
            <form onSubmit={handleSubmit} className="cocktail-search-searchbar">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for a cocktail..."
                />
                <button type="submit">Search</button>
            </form>

            <div className="cocktail-search-buttons">
                {[...Array(Math.ceil(searchCocktails.length / itemsPerPage))].map((_, index) => (
                    <button key={index} onClick={() => handleChangePage(index + 1)}>
                        Page {index + 1}
                    </button>
                ))}
            </div>
            <ul className="cocktail-search-similar-cocktails-list">
                {currentItems.map((cocktail) => (
                    <li key={cocktail.idDrink}><Link to={`/cocktail/${cocktail.idDrink}`}>{cocktail.strDrink}</Link>
                    </li>

                ))}
            </ul>

        </article>
    );
}
