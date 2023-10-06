import Header from "../components/header";
import Search from "../components/search";
import Banner from "../components/banner";
import Content from "../components/home_content";
import Footer from "../components/footer";

function Home(){
    return(
        <>
            <div className="App">
                <Header/>
                <br/>
                <Search/>
                <br/>
                <Banner/>
                <br/>
                <Content/>
                <br/>
                <Footer/>
            </div>
        </>
    );
}
export default Home;