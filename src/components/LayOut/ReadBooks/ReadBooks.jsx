import { useLoaderData } from "react-router-dom";
import { getData } from "../../Utility/Utility";
import { useContext, useEffect, useState } from "react";
import ListedBookCard from "../ListedBookCard/ListedBookCard";
import { filterAllContext } from "../../Pages/ListedBook/ListedBook";




const ReadBooks = () => {

    const { filterAll, isFilterApplied, isSortApplied, sortRatingCondition, isSortNumberApplied, sortNumCondition, isSortPublishYear, sortYearCondition } = useContext(filterAllContext)


    const allBooksData = useLoaderData();
    const [showData, setShowData] = useState([])


    useEffect(() => {
        const localStorageData = getData();
        if (localStorageData.length > 0) {
            const readBook = allBooksData.filter(book => localStorageData.includes(book.bookId))
            setShowData(readBook)
        }
    }, [allBooksData])



    // All Sorting
    useEffect(() => {
        if (isFilterApplied) {
            setShowData(filterAll)
        }
    }, [isFilterApplied, filterAll])


    // Rating Sorting
    useEffect(() => {
        if (sortRatingCondition) {
            setShowData(isSortApplied)
        }
    }, [sortRatingCondition, isSortApplied])


    // Number of Page Sorting
    useEffect(() => {
        if (sortNumCondition) {
            setShowData(isSortNumberApplied)
        }
    }, [sortNumCondition, isSortNumberApplied])


    // Publish Year Sorting
    useEffect(() => {
        if (sortYearCondition) {
            setShowData(isSortPublishYear)
        }
    }, [sortYearCondition, isSortPublishYear])



    return (
        <>

            {
                showData.map((singelBook => <ListedBookCard book={singelBook} key={singelBook.bookId} />))
            }

        </>
    );
};


export default ReadBooks;
