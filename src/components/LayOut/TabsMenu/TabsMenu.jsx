import { useState } from "react";
import { Link } from "react-router-dom";

const TabsMenu = () => {

    const [tabIndex, setTabIndex] = useState(0)


    return (
        <div className="flex items-center overflow-x-auto overflow-y-hidden flex-nowrap">
            <Link 
            onClick={()=> setTabIndex(0)}
            to={''}
            className={`flex items-center px-5 py-3 md:w-[250px] lg:w-[189px] space-x-2 dark:border-gray-600 ${tabIndex === 0 ? 'border border-b-0 rounded-t-lg' : 'border-b'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Read Books</span>
            </Link>
            <Link 
            to={'wishlist-books'}
            onClick={()=> setTabIndex(1)}
            className={`flex items-center px-5 py-3  md:w-[294px] lg:w-[222px] space-x-2 dark:border-gray-600 ${tabIndex === 1 ? 'border border-b-0 rounded-t-lg' : 'border-b'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <span>WishList Books</span>
            </Link>
            
            <div className="md:border-b md:dark:border-gray-600 md:w-full md:relative md:top-6">

            </div>

        </div>
    );
};

export default TabsMenu;

// space-x-2