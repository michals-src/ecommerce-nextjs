/**
 * Hook created to manipulate classes's names other DOM elements
 * e.g. add / remove class to body by click button action
 *
 * Classes are stored in context
 */

import { useState } from "react";

const useClassMannipulator = () => {
  const [klasy, zapiszKlasy] = useState({
    body: [],
  });

  const aktualizujKlasy = (key, classes) => {
    tablica[key] = classes;
    zapiszKlasy({ ...klasy, ...tablica });
  };

  return { klasy, aktualizujKlasy };
};

export default useClassMannipulator;
