const mongoose = require('mongoose')

const connect =function(){

 mongoose.connect('mongodb+srv://a01152379344:1241999a_H@cluster0.mpg9b.mongodb.net/E-Commerce?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('Connected to MongoDB')
}).catch(err =>{
    console.log('Error connecting to MongoDB', err)
})
}
module.exports ={
    connect,
}
