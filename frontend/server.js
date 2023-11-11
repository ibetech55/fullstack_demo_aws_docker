const express = require("express");
const path = require("path");
// const serverStatic = require("serve-static");
const history = require("connect-history-api-fallback");

const app = express();
app.use(history());

app.use("/", express.static(path.join(__dirname, "build")));

let port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening to Port:", port));
