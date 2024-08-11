import React, {useState} from "react";
import {useCocktail} from "../hooks/useCocktail.ts";
import {Link} from "react-router-dom";

const SearchPage: React.FC = () => {
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


    if (searchLoading) {
        return <div>Loading...</div>;
    } else if (!searchCocktails || searchCocktails.length === 0) {
        return <div>No cocktails found</div>
    }
    return (
        <article className="search-page">
            <form onSubmit={handleSubmit} className="searchbar">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for a cocktail..."
                />
                <button type="submit">Search</button>
            </form>

            <div className="search-buttons">
                {[...Array(Math.ceil(searchCocktails.length / itemsPerPage))].map((_, index) => (
                    <button key={index} onClick={() => handleChangePage(index + 1)}>
                        Page {index + 1}
                    </button>
                ))}
            </div>
            <ul className="similiar-cocktails-list">
                {currentItems.map((cocktail) => (
                    <li key={cocktail.idDrink}><Link to={`/cocktail/${cocktail.idDrink}`}>{cocktail.strDrink}</Link></li>

            ))}
            </ul>

        </article>
    );
}
export default SearchPage;