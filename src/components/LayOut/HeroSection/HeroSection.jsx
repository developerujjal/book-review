import HeroImage from '../../../assets/images/heroImg.png'

const HeroSection = () => {
    return (

        <div className="container px-4 mx-auto">
            <div className="flex items-center justify-center bg-[#1313130D] rounded-lg py-8 px-5 md:py-[35px] md:px-[30px] lg:py-28 lg:px-20">
                <div className="w-[65%] md:w-[auto]">
                    <h1 className="font-semibold text-[1.2rem] mb-4 md:text-[2.2rem] md:mb-[1.6rem] lg:text-[4rem] lg:mb-12">
                        Books to freshen up your bookshelf
                    </h1>
                    <button className="bg-[#23BE0A] text-white font-medium rounded-lg transition duration-200 px-[15px] py-2.5 text-base hover:bg-[#59C6D2] md:py-2.5 md:px-[15px] md:text-base lg:py-3.5 lg:px-[25px] lg:text-[1.1rem]">
                        View The List
                    </button>
                </div>
                <div className="w-[35%] flex justify-end">
                    <img src={HeroImage} alt="" />
                </div>
            </div>
        </div>


    );
};

export default HeroSection;




/* 

        <div className="container px-4 mx-auto">
            <div className="flex bg-[#1313130D] rounded-xl px-9 py-12 lg:px-40 lg:py-28">
                <div className='w-3/4'>
                    <h1 className='text-xl mb-5 lg:text-5xl lg:w-[65%] lg:mb-10 leading-tight'>Books to freshen up your bookshelf</h1>
                    <button type="button" className="px-8 py-3 font-semibold border rounded bg-[#23BE0A] text-white hover:bg-[#59C6D2]">View The List</button>
                </div>
                <div className='w-1/4'>
                    <img src={HeroImage} alt="" />
                </div>
            </div>
        </div>



        html
        ======

                <div className="container px-4 mx-auto">
            <div className="wrapper-hero">
                <div className='hero-text-main'>
                    <h1>Books to freshen up your bookshelf</h1>
                    <button>View The List</button>
                </div>
                <div className='hero-img'>
                    <img src={HeroImage} alt="" />
                </div>
            </div>
        </div>

*/