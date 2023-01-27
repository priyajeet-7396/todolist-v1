const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// Enable body parsing middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.set("view engine", "ejs");

let items = [];
let workitem = [];

app.get("/", function (req, res) {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    months: "long"
  };
  
  let day = today.toLocaleDateString("en-US",options);





  res.render("list", { listTittle: day, newListItems: items });
});

app.post("/", function (req, res){
     let item = req.body.newItem;
    
     if (req.body.list ==="work"){
        workitem.push(item);
        res.redirect("/work");
     }else{
        items.push(item);
        res.redirect("/");
     }
    
  });

  app.get("/work", function (req, res) {
    res.render("list",{listTittle:"Work List", newListItems: workitem})

  });


  app.post("/work", function (req, res){
    console.log(req.body);
    let item = req.body.newItem;
    workitem.push(item);
    res.redirect("/work")
   
 });

 app.get("/about", function (req, res) {
    res.render("about");
 });


app.listen(3000, function () {
  console.log("server started on port 3000");
});
