// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router('./db.json')
// const middlewares = jsonServer.defaults({
//     static: './build'
// });
// const PORT = process.env.PORT || 8000;
// server.use(middlewares);
// server.use(jsonServer.rewriter({
//     '/api/*': '/$1',
//     "/dogs/:category": "/dogs?category=:category",
//     "/cats/:category": "/cats?category=:category",
//     "/dogs/:id": "/dogs?id=:id",
//     "/cats/:id": "/cats?id=:id",
//     "/best/:id": "/best?id=:id"
// }))
// server.use(router);
// server.listen(PORT, () => {
//     console.log('Server is running');
// });