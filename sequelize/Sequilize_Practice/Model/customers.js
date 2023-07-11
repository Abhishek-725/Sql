const { Model, DataTypes } = require("sequelize");
const Product = require("./products");
const CustomerProduct = require("./customer_product");
const sequelize = require('../db/index');


class Customer extends Model{

}

Customer.init({
    customer_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:{args : [2,20],msg : "Lenght of name must 2 to 20 characters"}
        }
    },
    phone : {
        type:DataTypes.STRING,
        validate:{
            isNumeric:{
                msg:"Only number is allowed.."
            }
        }
    }
},
{
    sequelize,
    modelName:'customers',
    timestamps:false
}
);

Customer.belongsToMany(Product,{
    through:CustomerProduct,
    foreignKey:'customer_id'
});
Product.belongsToMany(Customer,{
    through:CustomerProduct,
    foreignKey:'product_id'
})

module.exports = Customer;

Customer.sync({alter:true})
    .then(async() => {
        let customer = await Customer.findOne({
            where :{name :'Rajiv'}
        });
        // console.log(customer);
        let product = await Product.findAll({where:{product_id :[2,5]}});
        // console.log(product);
        let result = await customer.addProducts(product);
        console.log(result);
    })
    .catch((error) => {
        console.log("customer error : ",error);
    })

