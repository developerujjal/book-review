import { Link } from "react-router-dom";

const ErrorPage = () => {

    const message = `Sorry, we couldn't find this page.`;

    return (
        <section className="flex items-center h-full p-16 h-[100vh] bg-gray-900 bg-gray-900 text-gray-100 text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-gray-600 text-gray-600">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">{message}</p>
                    <p className="mt-4 mb-8 text-gray-400 text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                    <Link to={'/'} className="px-8 py-3 font-semibold rounded bg-violet-400 bg-violet-400 text-gray-900 text-gray-900">Back to homepage</Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;