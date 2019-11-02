const userModel = require('../Models/user');
const form = require('../Helpers/form');
const formError = require ('../Helpers/formerror');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const salt = bcrypt.genSaltSync(10);

const secretKey = '12345678' ;

module.exports = {
    registerUser:(req,res) => {
        userModel.registerUser(req).
        then(response => {
            form.success(res, 200, 'User Create Succesfully');
        }).catch (error => {
            console.log (error);
            formError.errorPage (res, error);
        });
    },
    userLogin: (req,res) => {
            userModel.userLogin(req)
            .then(response => {
                if(response.lenght != 0 ){ console.log(req.body.password,response[0].password);
                    console.log(bcrypt.compareSync(req.body.password, response[0].password));
                    console.log(bcrypt.hashSync(req.body.password,salt));
                    
                    if(bcrypt.compareSync(req.body.password, response[0].password)) { 
                    //if(req.body.password ==  response[0].password) { 
                        const token = jwt.sign({id : response[0].id} , secretKey );
                        form.success(res, 200, {user_id: response[0].id, username:response[0].username, token : token});
                    }else{
//                    }else{
                        formError.errorPage(res, "Password Incorect!")
                    }
                }else{
                    form.errorPage (res, 'User Not Found')
                }
            })
    }
}
