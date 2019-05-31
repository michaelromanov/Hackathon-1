import mongoose from "mongoose"

const connectionString = "mongodb+srv://DBuser:DBuser123@cluster0-uwikr.mongodb.net/hackathon?retryWrites=true&w=majority"

function _serverError(err) {
  console.error(err)
}

mongoose.set("useFindAndModify", false)

let connection = mongoose.connection
mongoose.connect(connectionString, {
  useNewUrlParser: true
})

connection.on('error', _serverError)

connection.once('open', () => {
  console.log("Connected to DB");
})
