var personData= require("../data/friends.js");


module.exports = function(app) {
   
    app.get("/api/person", function(req, res) {
        res.json(personData);
    });

 
      
}; 