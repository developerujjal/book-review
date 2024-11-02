import { createContext, useEffect, useState } from "react";
import ListedBookSection from "../../LayOut/ListedBookSection/ListedBookSection";
import { useLoaderData } from "react-router-dom";
import { getData } from "../../Utility/Utility";

export const filterAllContext = createContext()

const ListedBook = () => {

    const allBooksData = useLoaderData();
    const [showData, setShowData] = useState([])
    const [filterAll, setFilterAll] = useState([])
    const [isFilterApplied, setIsFilterApplied] = useState(false);

    useEffect(() => {
        const localStorageData = getData();
        if (localStorageData.length > 0) {
            const readBook = allBooksData.filter(book => localStorageData.includes(book.bookId))
            setShowData(readBook)
            
        }
    }, [allBooksData])




    const handleAllFilter = (sort) => {
        if (sort === 'all') {
            setFilterAll([...showData]);
            setIsFilterApplied(true)
        }
    };

  

    return (

        <filterAllContext.Provider value={{ filterAll, isFilterApplied }}>
            <section>
                <ListedBookSection handleAllFilter={handleAllFilter} />
            </section>
        </filterAllContext.Provider>

    );
};

export default ListedBook;