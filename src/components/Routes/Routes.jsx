import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ListedBook from "../Pages/ListedBook/ListedBook";
import ReadingPage from "../Pages/ReadingPage/ReadingPage";
import BookDetails from "../LayOut/BookDetails/BookDetails";
import ReadBooks from "../LayOut/ReadBooks/ReadBooks";
import WishListBooks from "../LayOut/WishListBooks/WishListBooks";

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
                element: <ListedBook />,
                children: [
                    {
                        index: true,
                        element: <ReadBooks />,
                        loader: ()=> fetch('../booksData.json') // this is not a good practice
                    },
                    {
                        path: 'wishlist-books',
                        element: <WishListBooks />,
                        loader: ()=> fetch('../booksData.json') // this is not a good practice
                    }
                ]
            },
            {
                path: '/reading-pages',
                element: <ReadingPage />,
                loader: ()=> fetch('../booksData.json')
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