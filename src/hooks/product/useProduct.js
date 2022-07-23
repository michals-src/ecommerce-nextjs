import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectProducts } from '../../slice/productsSlice'

const useProduct = slug => {

    const products = useSelector(selectProducts);
    const [product, setProduct] = useState({})

    useEffect(() => {
        if (typeof slug === "undefined" || products[slug] === undefined) {
            // Fetch poduct
            // disptach productsUpdate
        }
        setProduct(products[slug])
    }, [slug]);

    return product;
}

export default useProduct