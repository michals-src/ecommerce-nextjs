import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Hashids from "hashids";

import { productsUpdate, selectProducts } from "../../slice/productsSlice";

import useProductFilter from "./useProductFilter";

const fetcher = url => fetch(url).then(res => res.json());
const useProduct = slug => {
  const products = useSelector(selectProducts);
  const disptach = useDispatch();

  const [_slug, set_slug] = useState(slug);
  const [product, setProduct] = useState({});
  const { productFilter } = useProductFilter();

  useEffect(() => {
    const hashids = new Hashids("", 8);
    const id_from_slug = hashids.decode(_slug.split("-").slice(-1)[0]);

    if (typeof _slug === "undefined" || products[_slug] === undefined) {
      const fetchData = async () => {
        // Fetching product from woo
        const data = await fetcher(`/api/products/${id_from_slug}`);
        // Filtering properties of object
        const finalData = await productFilter(data);
        console.log(finalData);
        setProduct(finalData);
        const memo = {};
        memo[id_from_slug] = finalData;
        disptach(productsUpdate(memo));
      };
      fetchData();
    } else {
      setProduct(products[_slug]);
    }
  }, [_slug]);

  return { product, update: set_slug };
};

export default useProduct;
