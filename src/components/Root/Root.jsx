import { Outlet } from "react-router-dom";
import NavBar from "../LayOut/NavBar/NavBar";

const Root = () => {
    return (
        <main>
            <header>
                <NavBar />
            </header>
            <div>
                <Outlet />
            </div>
        </main>
    );
};

export default Root;