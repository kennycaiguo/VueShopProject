/**
 * Created by hama on 2017/10/23.
 */
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    "userId":String,
    "userName":String,
    "userPwd":String,
    "orderList":Array,
    "cartList":[
        {
            "productId":String,
            "productName":String,
            "salePrice":String,
            "productImage":String,
            "checked":String,
            "productNum":String
        }
    ],
    "addressList":[
        {
            "addressId": String,
            "userName": String,
            "streetName": String,
            "postCode": Number,
            "tel": Number,
            "isDefault": Boolean
        }
    ]
});

module.exports = mongoose.model("User",userSchema);