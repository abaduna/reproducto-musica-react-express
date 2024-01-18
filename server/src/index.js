const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const tracksRouter = require("./router/tracks.router")
//initiinilaciones
const app = express();
app.use(morgan("dev"));


app.use( express.static("upload"));

//routes
app.use(tracksRouter)

app.listen(3001,()=>{
    console.log(`coriendo... en el purto 3001`);
});
