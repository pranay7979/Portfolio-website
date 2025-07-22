  const mongoose = require('mongoose');
  const users_schema1=new mongoose.Schema({
      name:{
          type:String,
          lowercase:true,
      },
      email:{
          type:String,
          
      },
      phone:{
          type:Number,
      },
      message:{
          type:String,
          lowercase:true,
      }
  })

  const users_collection1 = new mongoose.model('users_collection1',users_schema1);
  module.exports=users_collection1;

/*  data={
    name:"teachy",
    email:"pranay@gamil.com"
};

users_collection1.insertMany([data]);

*/
