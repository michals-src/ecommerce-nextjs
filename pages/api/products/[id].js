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

export default async function handler(req, res) {

  const {
    query: { id }
  } = req;

  try {
    const data = await fetch(
      `http://server.local/wp-json/wc/v3/products/${id}`,
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