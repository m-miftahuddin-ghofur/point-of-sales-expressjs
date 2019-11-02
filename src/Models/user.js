const connection = require('../Configs/connect');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

module.exports = {
    registerUser : req => {
        const body = req.body ;
        const pass = bcrypt.hashSync(body.password, salt)
        
        
        return new Promise((resolve,reject) => {
            connection.query('INSERT INTO user SET name=?, username=?, password = ?',
            [body.name, body.username, pass],
            (err,response) =>{
            
                if(!err) {
                    resolve(response);
                }else{
                    reject(err);
                }
            }); 
        });
    },
    userLogin : req => { console.log('cek2');
    
        return new Promise((resolve,reject) =>{
            const body = req.body;
            connection.query('SELECT * FROM user WHERE username = ?',
            [body.username],
            (err,response) =>{ console.log(response);
            
                if(!err) {
                    resolve(response);
                }else{
                    reject(err);
                }
            })
        })
    }

}