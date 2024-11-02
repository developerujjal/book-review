import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAllDatas } from "../../Utility/WishListLocalStorage";
import ListedBookCard from "../ListedBookCard/ListedBookCard";
import { filterAllContext } from "../../Pages/ListedBook/ListedBook";


const WishListBooks = () => {


    const { filterAll, isFilterApplied } = useContext(filterAllContext)


    const getAllData = useLoaderData();
    const [displayWishList, setDisplayWishList] = useState([])


    useEffect(() => {
        const dataFromWishList = getAllDatas();
        if (dataFromWishList.length > 0) {
            const newData = [];
            
            for (let id of dataFromWishList) {
                const exist = getAllData.find(iteam => iteam.bookId === id);
                if (exist) {
                    newData.push(exist)
                }
            }

            setDisplayWishList(newData)
        }
    }, [getAllData])



    return (
        <>
            {
                isFilterApplied ?
                displayWishList.map((singelWishList => <ListedBookCard book={singelWishList} key={singelWishList.bookId} />)) :
                filterAll.map((singelWishList => <ListedBookCard book={singelWishList} key={singelWishList.bookId} />))
            }
        </>
    );
};

export default WishListBooks;