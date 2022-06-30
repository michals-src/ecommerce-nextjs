// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {

  try {
    const data = await fetch(
      "https://server.local/wp-json/wc/v3/products",
      {
        method: "GET",
        headers: { "Content-Type": "application/json", "Authorization": `Basic ${process.env.STORE_CUSTOMER_KEY}:${process.env.STORE_CUSTOMER_SECRET}` },
      }
    );

    console.log(data);

    res.status(200).json(data);
  } catch (e) {
    console.log(e);
    res.status(200).json({});
  }
}
