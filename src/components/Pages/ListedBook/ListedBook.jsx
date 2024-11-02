import { createContext, useEffect, useState } from "react";
import ListedBookSection from "../../LayOut/ListedBookSection/ListedBookSection";
import { useLoaderData } from "react-router-dom";
import { getData } from "../../Utility/Utility";

export const filterAllContext = createContext()

const ListedBook = () => {

    const allBooksData = useLoaderData();
    const [showData, setShowData] = useState([])

    //Sort for All
    const [filterAll, setFilterAll] = useState([])
    const [isFilterApplied, setIsFilterApplied] = useState(false);

    //Sort for Rating
    const [isSortApplied, setIsSortApplied] = useState([])
    const [sortRatingCondition, setSortRatingCondition] = useState(false)

    //Sort for Number of Page
    const [isSortNumberApplied, setIsSortNumberApplied] = useState([])
    const [sortNumCondition, setSortNumCondition] = useState(false)

    //Sort for Publish Year
    const [isSortPublishYear, setIsPublishYear] = useState([])
    const [sortYearCondition, SetSortYearCondition] = useState(false)

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


    const handleRatingSort = (sort) => {
        if (sort === 'rating') {
            const ratingUpdate = showData.sort((a, b) => b.rating - a.rating);
            setIsSortApplied(ratingUpdate);
            setSortRatingCondition(true)
        }

    }


    const handleNumberOfPage = (sort) => {
        if (sort === 'number') {
            const numberOfPageUpdate = showData.sort((a, b) => b.totalPages - a.totalPages);
            setIsSortNumberApplied(numberOfPageUpdate)
            setSortNumCondition(true)
        }

    }


    const handlePublishYear = (sort) => {
        if(sort === 'publishYear'){
            const publishYear = showData.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setIsPublishYear(publishYear)
            SetSortYearCondition(true)
            

        }
    }



    return (

        <filterAllContext.Provider value={{ filterAll, isFilterApplied, isSortApplied, sortRatingCondition, isSortNumberApplied, sortNumCondition, isSortPublishYear, sortYearCondition }}>
            <section>
                <ListedBookSection handleAllFilter={handleAllFilter} handleRatingSort={handleRatingSort} handleNumberOfPage={handleNumberOfPage} handlePublishYear={handlePublishYear} />
            </section>
        </filterAllContext.Provider>

    );
};

export default ListedBook;