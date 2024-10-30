import { useEffect, useState } from "react";
import BooksCard from "../BooksCard/BooksCard";

const BookSection = () => {

    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    
    return (
        <div className="container px-4 mx-auto">
            <div>
                <div className="text-center font-bold text-2xl mb-7">
                    <h2>Books</h2>
                </div>
                <div className="flex flex-col md:flex-wrap md:flex-row md:justify-between gap-5">
                    {
                        books.map((book)=> <BooksCard book={book} key={book.bookId}/>
                    )
                    }
                </div>
            </div>
        </div>
    );
};

export default BookSection;