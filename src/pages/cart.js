import Header from "../components/header";
import Cart from "../components/cart";
import Footer from "../components/footer";

function Cart() {
    return (
        <>
           <div className="App">
                <Header/>
                <br/>
                <Cart/>
                <br/>
                <Footer/>
            </div>
        </>
    );
}

export default Cart;