const mongoose = require('mongoose');

const measureSchema = new mongoose.Schema(
{
    type: String,
    creationDate: String,
    sensorId:  
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sensor'
    },

    value : Number,
},

{
    timestamps: true
}

);

module.exports = mongoose.model('Measure', measureSchema);