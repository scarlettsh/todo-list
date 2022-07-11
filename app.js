const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const task = [];
const workItems = [];

app.get("/", (req, res) => {
  //   var date = new Date();
  //   var day = date.getDay();

  //   switch (day) {
  //     case 1:
  //       day = "Monday";
  //       break;
  //     case 2:
  //       day = "Tuesday";
  //       break;
  //     case 3:
  //       day = "Wednesday";
  //       break;
  //     case 4:
  //       day = "Thursday";
  //       break;
  //     case 5:
  //       day = "Friday";
  //       break;
  //     case 6:
  //       day = "Saturday";
  //       break;
  //     default:
  //       day = "Sunday";
  //       break;
  //   }

   const day = date.getDay();

  res.render("list", {
    kindOfDay: day,
    newListItems: task,
  });
});

app.get("/about", (req, res) => {
    res.render("about");
});

//get /work
app.get("/work", (req, res)=> {
    res.render("work", {
        workListItems: workItems
    })
})

app.post("/", (req, res) => {
  task.push(req.body.task);
  res.redirect("/");
});

//react post
app.post("/work", (req, res) => {
    var workItem = req.body.workItem;
    workItems.push(workItem);
    res.redirect("/work");
})

// make a work list page : same sample. heading: work list {1 work list.ejs get post}
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
