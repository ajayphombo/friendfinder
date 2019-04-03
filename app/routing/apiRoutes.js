var personData= require("../data/friends.js");


module.exports = function(app) {
   
    app.get("/api/person", function(req, res) {
        res.json(personData);
    });

    app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newperson = req.body;
      
        // Using a RegEx Pattern to remove spaces from newperson
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        //newperson.routeName = newperson.name.replace(/\s+/g, "").toLowerCase();
      
        console.log(newperson);
      
        personData.push(newperson);
      
        res.json(newperson);
      });      
}; 