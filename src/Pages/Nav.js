import { Link } from "react-router-dom";

export default function Nav () {
    return (
        <nav className="bg-primary h-20 w-full text-white flex items-center justify-between px-20">
            <Link to="/" className="text-4xl font-bold">The Table</Link>
            <div className="">
                <Link to="/about" className="font-semibold mx-4">About</Link>
                <Link to="/dishes/new" className="font-semibold mx-4">New Plate</Link>
            </div>
         
        </nav>
    )
}