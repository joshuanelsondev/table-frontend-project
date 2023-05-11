
export default function Dish({ dish }) {
    return (
      <div className="bg-primary flex justify-center items-center rounded-full h-[450px] w-[450px]">
        {/* <h1>{dish.name}</h1>
        <h1>{dish.calories}</h1>
        <h1>{dish.category}</h1>
        <h1>{dish.portions}</h1>{" "} */}
        <img src={dish.image_url} alt={dish.name} className="h-[450px] w-[450px] rounded-full cursor-pointer hover:outline outline-8 outline-white"/>
      </div>
    );
}