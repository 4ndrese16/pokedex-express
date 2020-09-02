var express = require('express');
var router = express.Router();

const pokeService = require("../services/pokeapi");

/* GET home page. */
router.get('/', async function(req, res, next) {

  let pokeList = await pokeService.fetchPokeList(); 
  
  pokeList = pokeList.results;
  // console.log(pokeList.results)

  const pokeData = req.query.search ? req.query.search : false;

  if (pokeData) {
    pokeData = await pokeService.fetchPokeData(query);
  }
 
  res.render("index", {
  title: "Express",
  pokeList,
  pokeData
});
})


module.exports = router;
