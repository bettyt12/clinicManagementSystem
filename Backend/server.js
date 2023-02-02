const express = require("express");
var bodyParser = require('body-parser')
const cors = require("cors");
const app = express();
const secret = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var corsOptions = {

};

//import routes
const receptionRoute = require('./routes/receptionRoute')
const adminRoute = require('./routes/adminRoute')
const nurseRoute = require('./routes/nurseRoute')
const loginRoute = require('./routes/loginRoute')


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,X-Total-Count');
  res.header('Access-Control-Expose-Headers', 'X-Total-Count')
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(cors(corsOptions));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome Tesdal." });
});



app.use('/reception',receptionRoute )
app.use('/admin',adminRoute )
app.use('/nurse',nurseRoute)
app.use('/login',loginRoute)



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
}); 