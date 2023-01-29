const express = require('express');
require('./db/config');
const UserModel = require('./db/users');
const cors = require("cors")             //fixing cors problem using cors module 

const ProductModel = require('./db/product');
const app = express();

app.use(express.json());
app.use(cors());


app.post("/register", async (req, resp) => {
    let user = new UserModel(req.body);
    let result = await user.save()
    // delete password from returning data as the result 
    result = result.toObject();
    delete result.password;
    resp.send(result)
})


app.post("/login", async (req, resp) => {
    if (req.body.password && req.body.email)
     {
       
        let User = await UserModel.findOne(req.body).select("-password");
        if (User) {
            resp.send(User);
        } else {
            resp.send({ result: "No User Found" })
        }
    }else{
        resp.send({result:"No User Found"});
    }

})

app.post('/add-product', async(req,resp)=>{
    let productModel = new  ProductModel(req.body);
    let result = await productModel.save();
    resp.send(result);
})

app.get('/products', async(req,resp)=>{
    let products = await  ProductModel.find();
    if(products.length > 0)
    {
        resp.send(products)
    }else{
        resp.send({result:"No products found"})
    }
})



app.listen(5000);



