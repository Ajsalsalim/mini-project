const mongoose = require("mongoose")
const orderSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
    payment:{
      method:{
        type:String,
        required:true
      },
      amount:{
        type:Number,
        requried:true
      }
    },
    address:{
        firstname: {
           type: String,
           required: true
         },
         lastname: {
           type: String,
           required: true
         },
         country: {
           type: String,
           required: true
         },
         address:{
           type: String,
           required: true
         },
         
         city: {
           type: String,
           required: true
         },
         state: {
           type: String,
           required: true
         },
         zip: {
           type: String,
           required: true
         },
         phone: {
           type: Number,
           required: true
         },
         email: {
          type: String,
          required: true
        },

      },
      
    createdAt:{
        type:Date,
        immutable:true,
        default:()=>Date.now()
    },
    products:{
        item:[{
            productId:{
                type:mongoose.Types.ObjectId,
                ref:'product',
                required:true
            },
            quantity:{
                type:Number,
                required:true
            },
            price:{
                type:Number,
            }
        }],
        totalprice:{
            type:Number,
            default:0
        }
    },
    status:{
        type:String,
        default:"Processing"
    },
    offer:{
        type:String,
        default:"None"
    },
    paymentDetails: {
      reciept: {
        type: String,
      },
      status: {
        type: String,
      },
      createdAt: {
        type: Date,
      }
  
    }

    
})
module.exports = mongoose.model("Orders",orderSchema)