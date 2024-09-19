import mongoose, { Schema, Document } from "mongoose";

export const ClientSchema = new Schema({
  name: {type: String, required: true},
  lastName: {type: String, required: true},
  phone: {type: String, required: true},
})

export const ClientModel = mongoose.model('Client', ClientSchema)