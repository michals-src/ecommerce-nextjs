import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
//import Hashids from "hashids";

import { productsUpdate, selectProducts } from "../../slice/productsSlice";

//import useProductFilter from "./useProductFilter";

const fetcher = url => fetch(url).then(res => res.json());
const useProduct = slug => {
  const products = useSelector(selectProducts);
  const disptach = useDispatch();

  //const [_slug, set_slug] = useState(slug);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  //const { productFilter } = useProductFilter();

  const fetchData = useCallback(async id_from_slug => {
    // Fetching product from woo
    const data = await fetcher(`/api/products/${id_from_slug}`);
    const memo = { [id_from_slug]: data };
    disptach(productsUpdate(memo));
    setProduct(data);
  }, []);

  const loadingHandle = useCallback(async () => {
    return new Promise((resolve, reject) => {
      if (Object.keys(product).length > 0) {
        resolve();
      }
    });
  }, [product]);

  useEffect(() => {
    //const hashids = new Hashids("", 8);
    const id_from_slug = slug.split("-").slice(-1)[0];
    //const id_int = hashids.decode(id_from_slug);

    if (
      typeof slug === "undefined" ||
      products.products[id_from_slug] === undefined
    ) {
      fetchData(id_from_slug).catch(e => setError(e));
    } else {
      let cachedProduct = products.products[id_from_slug];
      setProduct(cachedProduct);
    }

    loadingHandle().then(() => {
      setLoading(false);
    });
  }, [slug, product]);

  return { product, loading, error };
};

export default useProduct;
