import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { firestore } from "../firebase";
import ItemList from "./ItemList";

const SearcherContainer = () => {
  const [products, setProducts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const queryPath = new URLSearchParams(search);
    let arrayContain = queryPath.get("q").split("-");
    const collection = firestore.collection("items");
    let query = collection.where("tags", "array-contains-any", arrayContain);
    query = query.get();
    query
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((item) => ({ ...item.data(), id: item.id }))
        );
      })
      .catch();
  }, [search]);
  return (
    <div>
      <ItemList listProducts={products} />
    </div>
  );
};

export default SearcherContainer;
