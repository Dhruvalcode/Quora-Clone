const express = require("express");
const app = express();
const port = 5252;
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));

const { v4: uuidv4 } = require("uuid");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`${port} port is active now !`);
});

let posts = [
  {
    id: uuidv4(),
    username: "Atul",
    content: " I am atul and i am learning web devlopment.",
  },
  {
    id: uuidv4(),
    username: "Sakshi",
    content: " I am Sakshi and i love dogs.",
  },
  {
    id: uuidv4(),
    username: "Vinod",
    content: " I am Vinod and i do comment on social media.",
  },
];

app.get("/post", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/post/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/post", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ username, content, id });
  res.redirect("/post");
});

app.get("/post/show/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  console.log(post);
  res.render("show.ejs", { post });
});

app.delete("/post/delete/:id", (req, res) => {
  let { id } = req.params;

  posts = posts.filter((p) => id !== p.id);
  res.redirect("/post");
});

app.get("/post/edit/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("Edit.ejs", { post });
});

app.patch("/post/edit/:id", (req, res) => {
  let { id } = req.params;
  let { content } = req.body;

  let post = posts.find((p) => id === p.id);

  post.content = content;

  res.redirect("/post");
});
