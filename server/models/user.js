"use strict"

var mongoose     = require('mongoose')
  , Schema       = mongoose.Schema
  , UserShema

UserShema = new Schema({
      email: String
    , username : String
    , pass : String
    , oldPass : String
    , lastConnection : String
    , startDate : String
    , active : Boolean
    , level : Number
    , hash : String
    , ip : String
})

module.exports = mongoose.model('User', UserShema)
