const {Router} = require("express");
const axios = require("axios");

const routes = Router();

routes.get("/", (request,response) => {
    return response.json({
        message: "Hello World"
    });
});

routes.post("/devs", (request,response) => {
    const { github_username } = request.body;
    
    const apiResponse =  await axios.get(`https://api.github.com/user/${github_username}`);

    console.log(apiResponse.data);

    return response.json({message: "Hello World"});
});

module.exports = routes;