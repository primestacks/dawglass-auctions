import jsonServer from "json-server";
const server = jsonServer.create();
const router = jsonServer.router("src/data/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

export { server };
