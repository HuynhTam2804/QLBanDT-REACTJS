import Header from "../components/header";
import ProductContent from "../components/product_content";
import Footer from "../components/footer";

function Product() {
    return (
        <>
           <div className="App">
                <Header/>
                <br/>
                <ProductContent/>
                <br/>
                <Footer/>
            </div>
        </>
    );
}

export default Product;