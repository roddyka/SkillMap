const {Router} = require("express");
const DevController = require("./controllers/DevController");
const SearchController = require("./controllers/SearchController");
const routes = Router();

routes.get("/", (request,response) => {
    return response.json({
        message: "Hello World"
    });
});

routes.post("/devs", DevController.store);
routes.get("/devs", DevController.index);
routes.put("/devs", DevController.update);
routes.delete("/devs", DevController.delete);

routes.get("/search", SearchController.index);

module.exports = routes;