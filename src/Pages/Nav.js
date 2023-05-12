import { Link } from "react-router-dom";
import { MdOutlineCircle } from "react-icons/md";

export default function Nav() {
    return (
      <nav className="bg-primary h-20 w-full text-white flex items-center justify-between">
        <div className="flex items-center ml-10 gap-4 min-w-[250px]">
          <Link to={'/'}>
            <MdOutlineCircle
              className="border-2 border-secondary rounded-2xl bg-white hover:border-primary"
              size={28}
            />
          </Link>
          <Link
            to="/dishes"
            className="text-4xl font-bold hover:text-secondary"
          >
            The Table
          </Link>
        </div>
        <div className="mr-20 min-w-fit">
          <Link to={"/"} className="font-semibold mx-4 hover:text-secondary">
            Home
          </Link>
          <Link to="/about" className="font-semibold mx-4 hover:text-secondary">
            About
          </Link>
          <Link
            to="/dishes/new"
            className="font-semibold mx-4 hover:text-secondary"
          >
            New Plate
          </Link>
        </div>
      </nav>
    );
}