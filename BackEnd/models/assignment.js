var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AssignmentSchema = new Schema({
    
        question:{
          type:String
        },
        answers:{
          type:String
        },
        totalmarks:{
          type: Number
        }
      
});

module.exports = mongoose.model('Assignment', AssignmentSchema);
