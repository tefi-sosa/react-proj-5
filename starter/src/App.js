import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";

import { selectPotentials } from "./redux/slices/potentialCountriesSlice"
import { useSelector} from 'react-redux'
import { selectDisplay } from "./redux/slices/displayCountrySlice"

import LoadingModal from "./Components/LoadingModal"
import { selectLoading } from "./redux/slices/loadingSlice"

function App() {
    let potentials = useSelector(selectPotentials)
    let currentDisplay = useSelector(selectDisplay)
    let isLoading = useSelector(selectLoading)

    console.log(potentials)
    console.log("DISPLAY...", currentDisplay)

    return (
        <div className="App font-link">
            {isLoading && <LoadingModal />}
            <Header />
            {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
        </div>
    );
}

export default App;
