
const axios = require("axios");
const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");
module.exports = {

    async index(request, response){

        const devs = await Dev.find();
        return response.json(devs);
    },

    async store(request,response){
        const { github_username, techs, longitude, latitude } = request.body;

        let dev = await Dev.findOne({github_username});
        
        if(!dev){
            const apiResponse =  await axios.get(`https://api.github.com/users/${github_username}`);
    
            const {name = login, avatar_url, bio, followers, public_repos} = apiResponse.data;
            const techsArray = parseStringAsArray(techs);
            const location = {
                type: "Point",
                coordinates: [longitude, latitude]
            }
            //console.log(name, avatar_url, bio, github_username, followers, public_repos, techsArray);
        
            dev = await Dev.create({
                name,
                avatar_url,
                bio,
                github_username,
                followers,
                public_repos,
                techs: techsArray,
                location
            });
        }
        
        return response.json(dev);
    },

    async update(request, response){
        const { github_username, name, techs, longitude, latitude, bio } = request.body;

        let dev = await Dev.findOne({github_username});
        
        if(dev){
            const apiResponse =  await axios.get(`https://api.github.com/users/${github_username}`);
    
            //const {name = login, avatar_url, bio, followers, public_repos} = apiResponse.data;
            const techsArray = parseStringAsArray(techs);
            const location = {
                type: "Point",
                coordinates: [longitude, latitude]
            }
            //console.log(name, avatar_url, bio, github_username, followers, public_repos, techsArray);
        
            dev = await Dev.update({
                name,
                bio,
                techs: techsArray,
                location
            });
        }
        
        return response.json(dev);
    },

    async delete(request, response){
        const { github_username } = request.body;

        let dev = await Dev.findOne({github_username});

        if(dev){
            dev = await Dev.remove();
        }

        return response.json(dev);
    }

} 