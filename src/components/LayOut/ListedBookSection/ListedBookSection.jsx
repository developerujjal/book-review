import SortBy from "../SortBy/SortBy";
import TabsMenu from "../TabsMenu/TabsMenu";


const ListedBookSection = () => {



    return (
        <div className="container px-4 mx-auto">
            <div className="md:px-10">
                <div className="book-header-container">
                    <div className="text-center text-4xl mb-6 bg-[#1313130D] py-8 rounded-xl md:text-5xl">
                        <h1>Books</h1>
                    </div>
                    {
                        <SortBy />
                    }
                </div>

                <div className="mt-8 md:mt-14">
                    {
                        <TabsMenu />
                    }

                </div>
                <div className="mt-8">
                    <div className="py-5 md:px-1 md:py-6 lg:px-5 lg:py-10">

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ListedBookSection;