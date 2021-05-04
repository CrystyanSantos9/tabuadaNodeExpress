const expres = require("express");
const path = require("path");
const { Z_DEFLATED } = require("zlib");
const app = expres();

const port = process.env.PORT || 3000;

//ROTAS
const indexRouter = require('./routes/index')
const tabuadaRouter = require('./routes/tabuada')

//ARQUIVOS ESTÁTICOS    
// app.use(expres.static('public'))
app.use(expres.static(path.join(__dirname, 'public')))

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares
app.use("/", indexRouter)
app.use("/tabuadas", tabuadaRouter)

app.listen(port, () => console.log(`Listening on port: ${port}`));