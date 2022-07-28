import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//import Hashids from "hashids";

import { productsUpdate, selectProducts } from "../../slice/productsSlice";

//import useProductFilter from "./useProductFilter";

const fetcher = url => fetch(url).then(res => res.json());
const useProduct = slug => {
  const products = useSelector(selectProducts);
  const disptach = useDispatch();

  const [_slug, set_slug] = useState(slug);
  const [product, setProduct] = useState({});
  //const { productFilter } = useProductFilter();

  useEffect(() => {
    //const hashids = new Hashids("", 8);
    const id_from_slug = _slug.split("-").slice(-1)[0];
    //const id_int = hashids.decode(id_from_slug);

    if (
      typeof _slug === "undefined" ||
      products.products[id_from_slug] === undefined
    ) {
      const fetchData = async () => {
        // Fetching product from woo
        const data = await fetcher(`/api/products/${id_from_slug}`);
        const memo = { [id_from_slug]: data };
        disptach(productsUpdate(memo));
        setProduct(data);
      };
      fetchData();
    } else {
      setProduct(products.products[id_from_slug]);
    }
  }, [_slug]);

  return { product, update: set_slug };
};

export default useProduct;
