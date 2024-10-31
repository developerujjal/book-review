import Card from '../../../assets/images/kindpng_7318921.png'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaFileLines } from "react-icons/fa6";
import { Link } from 'react-router-dom';




const ListedBookCard = () => {
    return (
        <div className="flex flex-col border-2 rounded-xl px-1 sm:px-2 py-4 md:px-5 md:py-7 gap-6 md:flex-row">
            <div className="flex justify-center items-center rounded-xl py-4 md:py-0 w-full md:w-[40%] lg:w-1/4 bg-[#1313130D]">
                <img src={Card} alt="" />
            </div>
            <div className="w-full md:w-[60%] lg:w-3/4">
                <div>
                    <h2 className='text-[22px] font-bold mb-1.5 text-[#131313]'>The Catcher in the Rye</h2>
                    <p className='text-[#131313CC] font-medium'>By :<span> Awlad Hossain</span></p>
                </div>
                <div className="flex gap-1 text-[15px] md:gap-2 lg:gap-5 items-center mt-4">
                    <p className="font-semibold md:font-bold"><span>Tags: </span></p>
                    <a href="#" className='bg-[#23BE0A0D] text-[#23BE0A] md:font-medium px-2  py-1.5 md:px-5 rounded-[18px] text-[15px]'>#Young Adult</a>
                    <a href="#" className='bg-[#23BE0A0D] text-[#23BE0A] md:font-medium px-2 py-1.5 md:px-5 rounded-[18px] text-[15px]'>#Identity</a>
                    <div className='flex md:gap-2 text-[#131313CC]'>
                        <CiLocationOn size={24} />
                        <p className='md:text-[17px] md:font-normal'><span>Year of Publishing: 1924</span></p>
                    </div>
                </div>
                <div className="flex gap-6 items-center mt-4 pb-4 text-[#13131399] border-b-2">
                    <div className='flex justify-center items-center gap-3 text-[17px] md:text-[18px] font-normal'>
                        <MdOutlinePeopleAlt size={25} />
                        <p><span>Publisher: Scribner</span></p>
                    </div>
                    <div className='flex justify-center items-center gap-3 text-[17px] md:text-[18px] font-normal'>
                        <FaFileLines size={20} />
                        <p><span>Page 192</span></p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 md:flex-row md:gap-6 mt-5'>
                    <p className='bg-[#328EFF26] text-[#328EFF] rounded-[18px] px-5 py-2 font-normal'><span>Category: Classic</span></p>
                    <p className='bg-[#FFAC3326] text-[#FFAC33] rounded-[18px] px-5 py-2 font-normal'><span>Rating: 4.5</span></p>
                    <Link className='bg-[#23BE0A] text-[#FFFFFF] rounded-[18px] px-5 py-2 font-medium'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ListedBookCard;

// text-[16px] md:text-[20px]