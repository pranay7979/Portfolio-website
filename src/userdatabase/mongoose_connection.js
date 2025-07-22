const mongoose = require('mongoose');
const users_collection1 = require('./userdata')
mongoose.connect('mongodb://0.0.0.0:27017/myuserdata')
    .then(()=> {console.log("success")})
    .catch((err)=> {console.log(err) })

   