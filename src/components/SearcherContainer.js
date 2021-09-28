import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { firestore } from "../firebase";
import ItemList from "./ItemList";
import LoadingBars from "./LoadingBars";

const SearcherContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { search } = useLocation();

  useEffect(() => {
    setLoading(true);
    const queryPath = new URLSearchParams(search);
    let arrayContain = queryPath.get("q").split("-");
    const collection = firestore.collection("items");
    let query = collection.where("tags", "array-contains-any", arrayContain);
    query = query.get();
    query
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((item) => ({ ...item.data(), itemId: item.id }))
        );
        setLoading(false);
      })
      .catch((error)=>{
        console.log(error);
        setLoading(false);
      });
  }, [search]);
  return (
    <div>
      <ItemList listProducts={products} />
      { loading &&  <LoadingBars/>}
    </div>
  );
};

export default SearcherContainer;
