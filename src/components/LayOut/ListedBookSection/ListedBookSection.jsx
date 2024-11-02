import PropTypes from 'prop-types';
import { Outlet } from "react-router-dom";
import SortBy from "../SortBy/SortBy";
import TabsMenu from "../TabsMenu/TabsMenu";


const ListedBookSection = ({handleAllFilter, handleRatingSort, handleNumberOfPage, handlePublishYear}) => {

    return (
        <div className="container px-4 mx-auto">
            <div className="md:px-10">
                <div className="book-header-container">
                    <div className="text-center text-4xl mb-6 bg-[#1313130D] py-8 rounded-xl md:text-5xl">
                        <h1>Books</h1>
                    </div>
                    {
                        <SortBy handleAllFilter={handleAllFilter} handleRatingSort={handleRatingSort} handleNumberOfPage={handleNumberOfPage} handlePublishYear={handlePublishYear}/>
                    }
                </div>

                <div className="mt-8 md:mt-14">
                    {
                        <TabsMenu />
                    }

                </div>
                <div className="mt-8">
                    <div className="py-5 md:px-1 md:py-6 lg:px-5 lg:py-10">
                        <Outlet />
                    </div>
                </div>

            </div>
        </div>
    );
};

ListedBookSection.propTypes = {
    handleAllFilter: PropTypes.func.isRequired,
    handleRatingSort: PropTypes.func.isRequired,
    handleNumberOfPage: PropTypes.func.isRequired,
    handlePublishYear: PropTypes.func.isRequired

}

export default ListedBookSection;