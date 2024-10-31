import { useLoaderData } from "react-router-dom";
import { getData } from "../../Utility/Utility";

const ReadBooks = () => {
    const allBooksData = useLoaderData();
    console.log(allBooksData)

    const localStorageData = getData();
    console.log(localStorageData)
    

    return (
        <div>
            <h1>Read Books stuff</h1>
        </div>
    );
};

export default ReadBooks;