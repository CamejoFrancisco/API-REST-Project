import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:123@projetocluster.dzdi0jq.mongodb.net/API-REST-DB");

let db = mongoose.connection;

export default db; //Contains connection