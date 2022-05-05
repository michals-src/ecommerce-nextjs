import products from "../../../fakeData/products.json";

export default function handler(req, res) {
  const {
    query: { id },
  } = req;
  const filtered = products.filter(p => p.id == id);

  if (filtered.length > 0) {
    res.status(200).json(filtered);
  } else {
    res.status(404).json({ message: ` User with id: ${id} not found.` });
  }
}
