import products from "../../../fakeData/products.json";

// export default function handler(req, res) {
//   const {
//     query: { id },
//   } = req;
//   const filtered = products.filter(p => p.id == id);

//   if (filtered.length > 0) {
//     res.status(200).json(filtered);
//   } else {
//     res.status(404).json({ message: ` User with id: ${id} not found.` });
//   }
// }

import Utf8 from "crypto-js/enc-utf8";
import Base64 from "crypto-js/enc-base64";
import Hashids from "hashids";
import productFilter from "../../../src/helpers/productFilter";

export default async function handler(req, res) {
  const {
    query: { id },
  } = req;

  try {
    const hashids = new Hashids("", 8);
    const cred = `${process.env.STORE_CUSTOMER_KEY}:${process.env.STORE_CUSTOMER_SECRET}`;
    const hash = Base64.stringify(Utf8.parse(cred));

    const data = await fetch(
      `${process.env.STORE_URL}/wp-json/wc/v3/products/${hashids.decode(id)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${hash}`,
        },
      }
    ).then(response => response.json());

    let res_products = {};
    if (typeof data.code === "undefined") {
      res_products = productFilter([data])[0];
    }

    res.status(200).json(res_products);
  } catch (e) {
    res.status(200).json({});
  }
}
