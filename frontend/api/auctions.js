import auctions from "../src/data/db.json";

export default function handler(req, res) {
  res.status(200).json(auctions.Auctions);
}
