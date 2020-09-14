const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static("./src/assets"));

const todoApp = require("./controllers/todo");
todoApp(app);

app.use(express.static("assets"));

app.listen(3000, () => console.log("Listenig at port 3000"));
