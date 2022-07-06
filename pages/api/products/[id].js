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

import Utf8 from 'crypto-js/enc-utf8'
import Base64 from 'crypto-js/enc-base64';

export default async function handler(req, res) {

  const {
    query: { id }
  } = req;

  try {
    const cred = `${process.env.STORE_CUSTOMER_KEY}:${process.env.STORE_CUSTOMER_SECRET}`;
    const hash = Base64.stringify(Utf8.parse(cred));

    const data = await fetch(
      `${process.env.STORE_URL}/wp-json/wc/v3/products/${id}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json", "Authorization": `Basic ${hash}` },
      }
    ).then(response => response.json());

    res.status(200).json(data);
  } catch (e) {
    res.status(200).json({});
  }
}