import EditDishForm from '../Components/EditDishForm';
import { Link } from "react-router-dom";
import { MdChevronLeft } from "react-icons/md";


export default function Edit() {
  return (
    <div className="relative">
      <h1 className=" absolute text-primary text-3xl font-semibold ml-8">
        Edit Plate
      </h1>
      <div className=" mt-10 h-full w-full flex justify-center items-center">
        <EditDishForm />
      </div>
      <Link
        to={"/dishes"}
        className="absolute bottom-0 md:left-8 sm:left-2 flex items-center justify-center bg-primary w-20 h-8 rounded-2xl pr-2 text-white font-bold hover:bg-gray hover:text-primary"
      >
        <MdChevronLeft size={20} />
        Back
      </Link>
    </div>
  );
}
