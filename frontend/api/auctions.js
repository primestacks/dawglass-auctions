import jsonServer from "json-server";

const handler = (req, res) => {
  const server = jsonServer.create();
  const router = jsonServer.router("src/data/db.json");
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use(router);
  server(req, res);
};

export default handler;
