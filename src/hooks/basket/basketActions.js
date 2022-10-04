import { useEffect, useState, useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";
import { basketAdd, selectBasket } from "../../slice/productsSlice";

const basketActions = () => {
  const dispatch = useDispatch();

  const addToBasket = useCallback(slug => {
    dispatch(basketAdd(slug));
  }, []);

  return { addToBasket };
};

export default basketActions;
