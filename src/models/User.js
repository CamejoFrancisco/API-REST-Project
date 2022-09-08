import mongoose from "mongoose";

function birthDate(birth) {
    let birthday = new Date(birth);
    const today = new Date();
    let userAge = Math.floor((today - birthday) / 31536000000)
    if (userAge > 17) {
      return true
    } else {
      return false
    }
  }
  
  function formatDate(date) {
    let inputDate = new Date(date);
    return inputDate.toLocaleDateString();
  }

const userSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type:String, required: true},
        cpf: {type:String,minlength:11,maxlength:11, required: true},
        birthDate: {type:String,set: date => formatDate(date), validate: [birthDate, 'Usuário menor de idade, verifique'], required: true},
        email: {type:String, validate:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, required: true},
        password: {type:String,validate:/^[a-zA-Z0-9._@]{6,}$/, required: true},
        address: {type:String, required: true},
        number: {type:String, required: true},
        complement: {type:String, required: true},
        city: {type:String, required: true},
        state: {type:String, required: true},
        country: {type:String, required: true},
        zipCode: {type:String, required: true}
    }
);

const users = mongoose.model('users', userSchema);

export default users;