var personData= require("../data/friends.js");


module.exports = function(app) {
   
    app.get("/api/person", function(req, res) {
        res.json(personData);



        
    });

    app.post("/api/friends", function(req, res) {
        var newperson = req.body;
        console.log(newperson);
        personData.push(newperson);
        res.json(newperson);
      });      
}; 