const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

let items = [
  { name: "Chelsea" },
  { name: "Manchester United" },
  { name: "Arsenal" },
];

module.exports = (app) => {
  //get Todo
  app.get("/todo", (req, res) => {
    res.render("todo", { item: items });
  });

  // post Todo
  app.post("/todo", urlencodedParser, (req, res) => {
    items.push(req.body);
    res.json(items);
  });

  // post Todo
  app.delete("/todo/:item", (req, res) => {
    items = items.filter(
      (val) => val.name.replace(/ /g, "-") !== req.params.item
    );
    res.json(items);
  });
};
