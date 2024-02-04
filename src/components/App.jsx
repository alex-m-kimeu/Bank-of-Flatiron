import appData from "../data/data";
import Header from "./Header";

function App() {
    return (
        <>
        <Header name={appData.name} logo={appData.logo}/>
        </>
    )
}

export default App;