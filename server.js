const express= require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const routes = require("./routes/html-routes.js");
app.use(routes);

app.listen(PORT, function(){
    console.log(`Server listening to PORT: ${PORT}`)
}); 