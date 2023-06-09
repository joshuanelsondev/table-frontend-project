import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full h-full flex mt-40 justify-center">
      <div className="flex flex-col items-center gap-8 mb-32 min-w-fit">
        <h1 className="text-primary font-bold text-4xl whitespace-nowrap">Welcome to the Table</h1>
        <Link to="/dishes" className="bg-primary flex items-center justify-center text-white text-sm font-bold rounded-3xl p-2 w-24 hover:bg-gray hover:text-primary">View Table</Link>
      </div>
    </div>
  );
}
