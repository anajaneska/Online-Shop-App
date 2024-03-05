import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router";

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        signOut(auth).then(() => {
            navigate("/login");
        }).catch((error) => { });
    }
    

    return(
        <div>
            Home
            <button type="submit" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;