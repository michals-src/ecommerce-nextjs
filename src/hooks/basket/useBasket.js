import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//import Hashids from "hashids";

import { productsUpdate, selectBasket } from "../../slice/productsSlice";

const fetcher = url => fetch(url).then(res => res.json());
const useBasket = slug => {
  const products = useSelector(selectBasket);
  const disptach = useDispatch();

  const [_slug, set_slug] = useState(slug);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
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
      fetchData().catch(e => setError(e));
    } else {
      let cachedProduct = products.products[id_from_slug];
      setProduct(cachedProduct);
    }

    const loadingHandle = async () => {
      return new Promise(resolve => {
        if (product) resolve();
      });
    };

    loadingHandle().then(() => {
      setLoading(false);
    });
  }, [slug]);

  return { product, loading };
};

export default useProduct;
