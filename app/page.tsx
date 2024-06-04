import Recipes from "@/components/recipes";

const Home = () => {
  return (
    <div className="w-2/3">
      <Recipes endpoint={"/search"}/>
    </div>
  );
};
export default Home;
