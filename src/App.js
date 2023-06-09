// DEPENDENCIES
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

// PAGES
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import About from "./Pages/About/About";
import FourOFour from "./Pages/FourOFour";

// COMPONENTS
import Nav from "./Components/Nav";


function App () {
    return (
      <div className="app w-full h-full">
        <Router>
          <div className="app-wrapper w-full h-full">
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/dishes" element={<Index />} />
              <Route path="/dishes/:id" element={<Show />} />
              <Route path="/dishes/new" element={<New />} />
              <Route path="/dishes/:id/edit" element={<Edit />} />
              <Route path="*" element={<FourOFour />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
}



export default App;