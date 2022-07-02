// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//.htaccess
//SetEnvIf Authorization (.+) HTTPS=on

//https://www.schakko.de/2020/09/05/fixing-http-401-unauthorized-when-calling-woocommerces-rest-api/

export default async function handler(req, res) {

  try {
    const data = await fetch(
      "http://server.local/wp-json/wc/v3/products",
      {
        method: "GET",
        headers: { "Content-Type": "application/json", "Authorization": `Basic Y2tfNjY5MDFjYjRlNGY1N2UwNjBhZWRhMWVlZjMzZTA4Mzc1ZTc4N2M4Mzpjc184ODJmODdmYTE0YzRlOTI2MmE2YjE1MGZkZjFlN2IwNDMzYzQ4NzM3` },
      }
    ).then(response => response.json());

    res.status(200).json(data);
  } catch (e) {
    res.status(200).json({});
  }
}
