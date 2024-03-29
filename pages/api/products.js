// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//.htaccess
//SetEnvIf Authorization (.+) HTTPS=on

//https://www.schakko.de/2020/09/05/fixing-http-401-unauthorized-when-calling-woocommerces-rest-api/

import Utf8 from "crypto-js/enc-utf8";
import Base64 from "crypto-js/enc-base64";
import productFilter from "../../src/helpers/productFilter";

export default async function handler(req, res) {
  try {
    const cred = `${process.env.STORE_CUSTOMER_KEY}:${process.env.STORE_CUSTOMER_SECRET}`;
    const hash = Base64.stringify(Utf8.parse(cred));

    const data = await fetch(
      `${process.env.STORE_URL}/wp-json/wc/v3/products`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${hash}`,
        },
      }
    ).then(response => response.json());

    /**
                     * todo fix
code: "woocommerce_rest_cannot_view"
data: {status: 401}
message: "Sorry, you cannot list resources."
                     */

    let res_products = {};
    if (typeof data.code === "undefined") {
      res_products = productFilter(data);
    }

    res.status(200).json(res_products);
  } catch (e) {
    res.status(200).json({});
  }
}
