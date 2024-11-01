import { useLoaderData, useParams } from "react-router-dom";
import { saveData } from "../../Utility/Utility";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDatasInLocal } from "../../Utility/WishListLocalStorage";

const BookDetails = () => {
    const booksData = useLoaderData();
    const params = useParams();
    const { bookID } = params

    const numBookID = parseInt(bookID)
    const getMatch = booksData.find((book) => book.bookId === numBookID)

    const {
        bookId,
        image,
        bookName,
        author,
        category,
        review,
        tags,
        totalPages,
        publisher,
        yearOfPublishing,
        rating

    } = getMatch;


    const handleStoreData = (id) => {
        saveData(id)


    }

    const handleWishList = (id) => {
        saveDatasInLocal(id)
    }

    return (
        <section>
            <div className="container px-4 mx-auto">
                <div className="flex flex-col gap-[38px] md:flex-row md:py-12 md:px-[30px]">
                    <div className=" flex justify-center items-center bg-[#1313130D] rounded-lg py-5 md:w-[50%]">
                        <img src={image} alt="" className="w-1/2" />
                    </div>
                    <div className="md:w-[50%]">

                        <ToastContainer />

                        <div className=" border-b-2 border-[#13131326]">
                            <h2 className='text-3xl font-bold mb-3 text-[#131313] md:text-4xl'>{bookName}</h2>
                            <p className='pb-4 text-[#131313CC] font-medium text-base'>By :<span> {author}</span></p>
                        </div>
                        <div className="text-[#131313CC] font-medium py-2 text-[17px] border-b-2 border-[#13131326]">
                            <p><span>{category}</span></p>
                        </div>
                        <div className="border-b-2 border-[#13131326]">
                            <div className="mt-[18px]">
                                <p><span className="font-bold">Review: </span>{review}</p>
                            </div>
                            <div className="flex gap-5 items-center mt-4 pb-4">
                                <p className="font-bold"><span>Tags: </span></p>
                                <a href="#" className='bg-[#23BE0A0D] text-[#23BE0A] font-medium py-1.5 px-5 rounded-[18px] text-[15px]'>#{tags[0]}</a>
                                <a href="#" className='bg-[#23BE0A0D] text-[#23BE0A] font-medium py-1.5 px-5 rounded-[18px] text-[15px]'>#{tags[1]}</a>

                            </div>
                        </div>
                        <div className="mt-[18px] mb-6">
                            <div className="grid grid-cols-2 ">
                                <p><span>Number of Pages:</span></p>
                                <p><span className="font-bold">{totalPages}</span></p>
                            </div>
                            <div className="grid grid-cols-2 ">
                                <p><span>Publisher:</span></p>
                                <p><span className="font-bold">{publisher}</span></p>
                            </div>
                            <div className="grid grid-cols-2 ">
                                <p> <span>Year of Publishing:</span></p>
                                <p><span className="font-bold">{yearOfPublishing}</span></p>
                            </div>
                            <div className="grid grid-cols-2 ">
                                <p><span>Rating:</span></p>
                                <p><span className="font-bold">{rating}</span></p>
                            </div>
                        </div>
                        <div className="flex gap-4">


                            <button
                                onClick={() => {
                                    handleStoreData(bookId);
                                }}
                                className="relative z-30 inline-flex items-center justify-center w-auto px-8 py-2.5 overflow-hidden font-bold text-gray-500 transition-all duration-500 border border-gray-200 rounded-md cursor-pointer group ease bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white">
                                <span className="w-full h-0.5 absolute bottom-0 group-active:bg-transparent left-0 bg-gray-100"></span>
                                <span className="h-full w-0.5 absolute bottom-0 group-active:bg-transparent right-0 bg-gray-100"></span>
                                Read
                            </button>

                            <button
                                onClick={() => {
                                    handleWishList(bookId);
                                }}
                                className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span className="relative">Wishlist</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default BookDetails;