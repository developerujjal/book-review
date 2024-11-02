import PropTypes from 'prop-types';

const SortBy = ({ handleAllFilter, handleRatingSort, handleNumberOfPage, handlePublishYear }) => {


    function handleText(e) {
        const target = e.target.innerText;
        const selectElement = document.getElementById('btn');
        selectElement.innerText = target;
    }


    return (
        <div className="flex py-8 rounded-xl dark:bg-gray-900 justify-center items-center">
            <div className="w-[150px] text-gray-900 dark:text-gray-100">
                <div className="relative w-full group">
                    <label className="text-xs text-gray-400">Sort by Criteria</label><button
                        id="btn" className="py-2.5 px-3 w-full md:text-sm text-site bg-transparent border border-dimmed  focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between rounded font-semibold">All</button>
                    <div
                        className="absolute z-[99] top-[100%] left-[50%] translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-[200px] w-max peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200 p-1 bg-gray-100 dark:bg-gray-800  border border-dimmed text-xs md:text-sm">
                        <div
                            onClick={(e) => {
                                handleText(e);
                                handleAllFilter('all');
                            }}
                            className=" w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md">
                            All</div>
                        <div
                            onClick={(e) => {
                                handleText(e);
                                handleRatingSort('rating')
                            }}
                            className=" w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md">
                            Rating</div>
                        <div
                            onClick={(e) => {
                                handleText(e);
                                handleNumberOfPage('number')
                            }}
                            className=" w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md">
                            Number of Pages
                        </div>
                        <div
                            onClick={(e) => {
                                handleText(e);
                                handlePublishYear('publishYear')
                            }}
                            className=" w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md">
                            Publisted Year
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};


SortBy.propTypes = {
    handleAllFilter: PropTypes.func.isRequired,
    handleRatingSort: PropTypes.func.isRequired,
    handleNumberOfPage: PropTypes.func.isRequired,
    handlePublishYear: PropTypes.func.isRequired
}

export default SortBy; 