const { Model, DataTypes } = require("sequelize");
const sequelize = require('../db/index');

class Product extends Model{

}

Product.init({
    product_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    }
},
{
    sequelize,
    modelName:'products',
    timestamps:false
}
);

module.exports = Product;

Product.sync({alter:true})
    .then(async() => {
        // let result = await Product.create({
        //     name : 'T.V'
        // },
        // );
        // console.log(result);
    })
    .catch((error) => {
        console.log("Product error : ",error);
    })