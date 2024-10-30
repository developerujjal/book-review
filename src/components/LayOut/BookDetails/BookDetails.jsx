import { useLoaderData, useParams } from "react-router-dom";
import './BooksDetails.css'

const BookDetails = () => {
    const booksData = useLoaderData();
    const params = useParams();
    const { bookID } = params

    const numBookID = parseInt(bookID)
    const getMatch = booksData.find((book) => book.bookId === numBookID)

    const {
        image,
        bookName,
        author,
        category,
        review,
        tags

    } = getMatch;


    return (
        <section>
            <div className="container px-4 mx-auto">
                <div className="wrapper-details">
                    <div className="details-img">
                        <img src={image} alt="" />
                    </div>
                    <div className="details-des-container">
                        <div className=" border-b-2 border-dashed border-[#13131326]">
                            <h2 className='text-[22px] font-bold mb-1.5 text-[#131313]'>{bookName}</h2>
                            <p className='pb-4 text-[#131313CC] font-medium'>By :<span> {author}</span></p>
                        </div>
                        <div className="text-[#131313CC] font-medium">
                            <p><span>{category}</span></p>
                        </div>
                        <div className="review-details-container">
                            <div className="review-detials">
                                <p><span className="font-bold">Review: </span>{review}</p>
                            </div>
                            <div className="flex gap-5 items-center my-4 mx-0">
                                <p className="font-bold"><span>Tags: </span></p>
                                <a href="#" className='bg-[#23BE0A0D] text-[#23BE0A] font-medium py-1.5 px-5 rounded-[18px] text-[15px]'>#{tags[0]}</a>
                                <a href="#" className='bg-[#23BE0A0D] text-[#23BE0A] font-medium py-1.5 px-5 rounded-[18px] text-[15px]'>#{tags[1]}</a>

                            </div>
                        </div>
                        <div className="more-information">
                            <div>
                                <p><span>Number of Pages:</span></p>
                                <p><span>281</span></p>
                            </div>
                            <div>
                                <p><span>Publisher:</span></p>
                                <p><span>J.B Lippincott & Co.</span></p>
                            </div>
                            <div>
                                <p> <span>Year of Publishing:</span></p>
                                <p><span>1960</span></p>
                            </div>
                            <div>
                                <p><span>Rating:</span></p>
                                <p><span>4.8</span></p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <a href="#_" className="relative z-30 inline-flex items-center justify-center w-auto px-8 py-2.5 overflow-hidden font-bold text-gray-500 transition-all duration-500 border border-gray-200 rounded-md cursor-pointer group ease bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white">
                                <span className="w-full h-0.5 absolute bottom-0 group-active:bg-transparent left-0 bg-gray-100"></span>
                                <span className="h-full w-0.5 absolute bottom-0 group-active:bg-transparent right-0 bg-gray-100"></span>
                                Read
                            </a>

                            <a href="#_" className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span className="relative">Wishlist</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookDetails;