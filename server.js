const express= require("express")
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")
const mongoose = require("mongoose")
const app = express()

const port = process.env.PORT || 3001 

app.use(express.static("public"))

app.use(express.urlencoded({extended: true}))

app.use(express.json())
app.use(apiRoutes)
app.use(htmlRoutes)

mongoose.connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.listen(port , function(){
    console.log("app is listening on port:",port)
}  )