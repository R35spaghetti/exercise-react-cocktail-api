import React, {useState} from "react";
import {useCocktail, useGoHome, useLoadingData} from "../hooks";
import {Link} from "react-router-dom";


export const SearchPage: React.FC = () => {
    const {moreData, isLoading, setSearchQuery} = useCocktail();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setQuery] = useState("");
    const {goHome} = useGoHome();
    const {condition} = useLoadingData(isLoading, moreData[0]);
    const itemsPerPage = 10;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearchQuery(searchQuery);
    };
    const handleChangePage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Array.isArray(moreData)
        ? moreData.slice(indexOfFirstItem, indexOfLastItem) || []
        : [];

    if (!moreData.length) {
        return <div>{condition}</div>;
    }

    return (
        <article className="cocktail-cocktailSearch-container">
            <button onClick={goHome}>Home</button>
            <form onSubmit={handleSubmit} className="cocktail-search-searchbar">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for a cocktail..."
                />
                <button type="submit">Search</button>
            </form>

            <div className="cocktail-search-buttons">
                {[...Array(Math.ceil(moreData.length / itemsPerPage))].map((_, index) => (
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
