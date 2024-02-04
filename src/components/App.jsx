import appData from "../data/data";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";

function App() {
    return (
        <>
        <Header name={appData.name} logo={appData.logo}/>
        <div className="content">
            <Home />
        </div>
        <Footer copyright={appData.copyright}/>
        </>
    )
}

export default App;