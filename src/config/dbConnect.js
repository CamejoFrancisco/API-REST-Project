import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:123@alura.sieuue1.mongodb.net/usersDB");

let db = mongoose.connection;

export default db; //Contains connection