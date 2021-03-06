import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertAPP = () => {
  const [categories, setCategories] = useState([
    "One Punch"
  ]);

  return (
    <>
      <h2>GifExpertAPP</h2>
      <AddCategory setCategories={setCategories} />
      <hr />


      {categories.map((category) => <GifGrid key={category} category={category} />

      )}

    </>
  );
};

export default GifExpertAPP;
