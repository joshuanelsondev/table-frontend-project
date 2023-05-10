import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Edit from ".Pages/Edit";
import Home from ".Pages/Home";
import Index from ".Pages/Index";
import New from ".Pages/New";
import Show from ".Pages/Show";


function App () {
    return (
        <div className="app">
            <Router>
                <div className="app-wapper">
                    <Nav/>
                    <Routes>
                        <Route exact path="/" element={ <Home/>}/>
                        <Route path="Show" element={ <Show/>}/>
                        <Route/>
                        <Route/>
                        <Route/>
                    </Routes>
                </div>
            </Router>
        </div>
    )
}