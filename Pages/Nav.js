import { Link } from "react-router-dom";

export default function Nav () {
    return (
        <nav>
            <Link to="/Home">The Table</Link>
            <Link to="/About">About</Link>
            <Link to="/Edit">Edit</Link>
            <Link to="/New">New</Link>
            <Link to="/Show">Show</Link>
        </nav>
    )
}