import { useSelector } from "react-redux";

const Header = () => {
    const {cartTotalQuantity} = useSelector(state=>state.cart) 
    return ( 
        <header>
            <img src="" alt="logo" />
            <h1>Pixie Crochet Skopje</h1>
            <div>
                <a href="/shopping-cart">My Shopping cart</a>
                <span>{cartTotalQuantity}</span>
            </div>
            
            <div>Login/Logout Button</div>
             <a href="/products/home">Home Products </a> |
             <a href="/products/clothes">Clothes </a>  |
             <a href="/products/accessories">Accessories </a> 
        </header>
     );
}
export default Header;