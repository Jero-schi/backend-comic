const mongoose = require('mongoose')
const dbconnect = () => {
    mongoose.set('strictQuery', true)
    mongoose.connect('mongodb+srv://jeronimocomaschi05:Jer0,schi@cluster0.tqic5we.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {}, 
    ).then(() => console.log('succefull'))
    .catch((err) => console.log(err))

}
module.exports = dbconnect