import mongoose from "mongoose";
import validator from "validator";

const {Schema} = mongoose;


// const contactSchema = new mongoose.Schema({
//     firstname: String,
//     lastname: String,
//     address: String,
//     country: String,
//     city: String,
//     gender: String,
//     date: Date,
//     bloodGroup: String,
//     email: String,
//   });

const contactSchema = new Schema({
  firstname:{
      type:String,
      lowrcase:true,
      required : true,
  },
  lastname:{
    type:String,
    lowrcase:true,
    required : true,
},
address:{
  type:String,
  lowrcase:true,
  required : true,
},
country:{
  type:String,
  lowrcase:true,
  required : true,
},
city:{
  type:String,
  lowrcase:true,
  required : true,
},
gender:{
  type:String,
  lowrcase:true,
  required : true,
},
bloodGroup:{
  type:String,
  lowrcase:true,
  required : true,
},
date:{
  type: Date,
  required: true,
},
email:{
  type:String,
  lowrcase:true,
  unique:true,
  required : true,
  validate:[validator.isEmail, "please enter a valid email"]
}
},
{
  timestamps:true,
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;