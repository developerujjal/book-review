import { useContext } from "react";
import { AuthContext } from "../../ContextAuth/ContextAuth";

const Profile = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <h1 className="text-3xl">This is Profile page</h1>
            {
                user && (
                    <p>{user?.email}</p>
                )
            }
        </div>
    );
};

export default Profile;