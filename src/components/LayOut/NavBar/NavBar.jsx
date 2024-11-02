import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <div className="container px-4 py-5 flex justify-between mx-auto">
                <Link to={'/'} className="flex items-center p-2 font-bold text-2xl second-text-font">
                    Book Vibe
                </Link>
                <div className="hidden lg:flex lg:items-center lg:gap-4 text-[#131313CC] second-text-font">
                    <NavLink
                        to={'/'}
                        className={({ isActive }) => isActive ? 'border rounded border-[#23BE0A] text-[#23BE0A] px-4 py-2 font-medium ' : ' px-4 py-2 font-medium'}>Home</NavLink>
                    <NavLink
                        to={'/listed-books'}
                        className={({ isActive }) => isActive ? 'border rounded border-[#23BE0A] text-[#23BE0A] px-4 py-2 font-medium' : ' px-4 py-2 font-medium'}>Listed Books</NavLink>
                    <NavLink
                        to={'/reading-pages'}
                        className={({ isActive }) => isActive ? 'border rounded border-[#23BE0A] text-[#23BE0A] px-4 py-2  font-medium' : ' px-4 py-2 font-medium'}>Reading Pages</NavLink>
                    <NavLink
                        to={'/contact'}
                        className={({ isActive }) => isActive ? 'border rounded border-[#23BE0A] text-[#23BE0A] px-4 py-2  font-medium' : ' px-4 py-2 font-medium'}>Contact</NavLink>
                </div>
                <div className="items-center second-text-font flex-shrink-0 hidden lg:flex lg:gap-2">
                    <button className="self-center px-4 py-2  rounded bg-[#23BE0A] text-white font-bold">Sign in</button>
                    <button className="self-center px-4 py-2 rounded bg-[#59C6D2] text-white font-bold">Sign up</button>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </nav >
    );
};

export default NavBar;