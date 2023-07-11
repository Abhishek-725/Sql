const { Model, DataTypes } = require("sequelize");
const sequelize = require('../db/index');

class CustomerProduct extends Model{

}

CustomerProduct.init({
    customer_product_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    customer_id:{
        type:DataTypes.INTEGER
    },
    product_id:{
        type:DataTypes.INTEGER
    }
},
{
    sequelize,
    modelName:'customer_products',
    timestamps:false
}
);


module.exports = CustomerProduct;

CustomerProduct.sync({alter:true})
    .then(() => {
    
    })
    .catch((error) => {
        console.log("Customer_Product :",error);
    })