const mongoose = require('mongoose')

const Schema = mongoose.Schema

const volunteerSchema = new Schema({

    orgId:{
        type:String,
        required:true
    },
    orgName:{
        type:String,
        required:true
    },
    requestTitle:{
        type:String,
        required:true
    },
    population:{
        type:String,
        required:true
    },
    dueDate:{
        type:Date,
        required:true
    },
    orgOtherDetails:{
        type:String,
        required:true
    },
    orgLocation:{
        type:String,
        required:true
    },
    orgTelephone:{
        type:Number,
        required:true
    },
    donorId:{
        type:String,
        required:true
    },
    donorName:{
        type:String,
        required:true
    },
    donationSize:{
        type:String,
        required:true
    },
    deliveryMethod:{
        type:String,
        required:true
    },
    donorTelephone:{
        type:Number,
        required:true
    },
    donorOtherDetails:{
        type:String,
        required:true
    },
    donorLocation:{
        type:String,
        required:true
    },
    volunteerId:{
        type:String,
        require: true
    },
    volunteerName: {
        type: String,
        required: true
    },
    NIC: {
        type: String,
        required: true
    },
    vehicleNo:{
        type: String,
        required: true
    },
    volunteerTelephoneNo:{
        type: Number,
        required: true
    }
},  {timestamps:true})


module.exports = mongoose.model('Volunteer', volunteerSchema)