import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, world");
});

app.get("/contact", (req, res) => {
  res.send("Contact");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
