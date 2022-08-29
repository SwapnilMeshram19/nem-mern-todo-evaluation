const { Router } = require("express");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const login = Router();

const loginSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    Type: String,
    required: true,
  },
});
