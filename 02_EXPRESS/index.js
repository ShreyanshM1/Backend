const express = require("express");

const app = express();
// console.dir(app);

let port = 3000; // 8080

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

//listen
// app.use ((req,res) => {
//   console.log("request recieved");
//   // res.send({
//   //   name : "apple",
//   //   color : "red",
//   // });
//   let code = "<h1>Fruits</h1> <ul><li>apple</li><li>mango</li></ul>"
//   res.send(code);
// })


// app.get("/", (req, res) => {
//   res.send("you contacted root path");
// });

// app.get("/search", (req, res) => {
//   res.send("you contacted search path");
// });

// app.get("/help", (req, res) => {
//   res.send("you contacted help path");
// });

// //{*splat} --> for all path which is not define
// app.get("/{*splat}", (req, res) => {
//   res.send("this path does not exist");
// });

// app.post("/", (req, res) => {
//   res.send("you sent a post request to root");
// });




app.get("/",(req, res) => {
  res.send("hello, i am root");
});
//Path Parameters
app.get("/:username/:id", (req,res) => {
  //res.send(req.params);
  let {username, id} = req.params;
  //res.send(`Welcome to the page of @${username}`);
  let htmlStr = `<h1>Welcome to the page of @${username}!</h1>`
  res.send(htmlStr);
})

//query Strings

// app.get("/search", (req, res) => {
//   let { q } = req.query;
//   // res.send(`search results for query: ${q}`);
//   if(!q){
//     res.send("<h1>nothing searched</h1>");
//   }
//   res.send(`<h1>search results for query: ${q}</h1>`);
// });

app.get("/search", (req,res) => {
  // console.log(req.query);
  let {q} = req.query;
  // res.send(`search results for query: ${q}`);
  if(!q){
    res.send(`<h1>Nothing Searched</h1>`);
  }
  res.send(`<h1>search results for query: ${q}</h1>`);
});
