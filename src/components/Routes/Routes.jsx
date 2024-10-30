import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ListedBook from "../Pages/ListedBook/ListedBook";
import ReadingPage from "../Pages/ReadingPage/ReadingPage";
import BookDetails from "../LayOut/BookDetails/BookDetails";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/listed-books',
                element: <ListedBook />
            },
            {
                path: '/reading-pages',
                element: <ReadingPage />
            },
            {
                path: '/book/:bookID',
                loader: ()=> fetch('../booksData.json'),
                element: <BookDetails />
            }
        ]
    }
])


export default routers;