import { useLoaderData } from "react-router-dom";
import { getData } from "../../Utility/Utility";
import { useContext, useEffect, useState } from "react";
import ListedBookCard from "../ListedBookCard/ListedBookCard";
import { filterAllContext } from "../../Pages/ListedBook/ListedBook";




const ReadBooks = () => {

    const allBooksData = useLoaderData();
    const [showData, setShowData] = useState([])

    useEffect(() => {
        const localStorageData = getData();
        if (localStorageData.length > 0) {
            const readBook = allBooksData.filter(book => localStorageData.includes(book.bookId))
            setShowData(readBook)
        }
    }, [allBooksData])


    const { filterAll, isFilterApplied } = useContext(filterAllContext)
    console.log(filterAll)


    return (
        <>
            {
                isFilterApplied ? 
                filterAll.map((singelBook => <ListedBookCard book={singelBook} key={singelBook.bookId} />)) :
                showData.map((singelBook => <ListedBookCard book={singelBook} key={singelBook.bookId} />))
            }
        </>
    );
};


export default ReadBooks;