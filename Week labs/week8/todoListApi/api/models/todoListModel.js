const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: {
        type: String,
        require: 'Kindly enter the name of the task'
    },
    Create_date: {
        type: Date,
        default: Date.now
    },
    status:{
        type:[{
            type: String,
            enum: ['Pending', 'Ongoing', 'Completed']
        }],
        default: ['Pending']
    }
});
module.exports = mongoose.model('Tasks', TaskSchema)