import PropTypes from 'prop-types';
import { MdStarOutline } from "react-icons/md";
import { Link } from 'react-router-dom';


const BooksCard = ({ book }) => {
    const { bookId, image, tags, bookName, author, category, rating } = book

    return (
        <Link
            to={`/book/${bookId}`}
            className=" w-full border-2 border-[#13131326] rounded-lg py-5 px-[18px] md:w-[45%] lg:w-[30%] cursor-pointer">
            <div className="w-full py-[18px] bg-[#F3F3F3] rounded-lg">
                <img src={image} alt="" className='w-2/5 my-0 mx-auto h-[200px]' />
            </div>
            <div className="my-4 mx-0">
                <ul className='flex gap-5'>
                    <li className='bg-[#23BE0A0D] text-[#23BE0A] font-medium py-1.5 px-5 rounded-[18px] text-[15px]'>{tags[0]}</li>
                    <li className='bg-[#23BE0A0D] text-[#23BE0A] font-medium py-1.5 px-5 rounded-[18px] text-[15px]'>{tags[1]}</li>
                </ul>
            </div>
            <div className=" border-b-2 border-dashed border-[#13131326]">
                <h2 className='text-[22px] font-bold mb-1.5 text-[#131313]'>{bookName}</h2>
                <p className='pb-4 text-[#131313CC] font-medium'>By :<span> {author}</span></p>
            </div>
            <div className="flex justify-between items-center pt-3.5 text-[#131313CC] font-medium">
                <div>
                    <p><span>{category}</span></p>
                </div>
                <div className="flex gap-2.5">
                    <span>{rating}</span>
                    <MdStarOutline size={25} color={'#424242'} />

                </div>
            </div>
        </Link>
    );
};

BooksCard.propTypes = {
    book: PropTypes.object.isRequired
}

export default BooksCard;