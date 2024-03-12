import { MdOutlineShoppingCart } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <header className="d-flex justify-content-between align-items-center px-5 py-2">
            <div className="d-flex justify-content-between align-items-center">
                <img src="" alt="logo" />
                <h1>Pixie Crochet Skopje</h1>
            </div>
            <nav className="d-flex">
                <MdOutlineShoppingCart></MdOutlineShoppingCart>
                <FiUser></FiUser>
            </nav>
        </header>
     );
}
export default Header;