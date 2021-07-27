
const db = require('../config/db')
const usermodel = {
    getAllData:() =>{
        return new Promise ((resolve , reject)=>{
            db.query(`select * from users`, (err, result) =>{
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }

            })
        })
     },
    getlist: (search, field, typeSort, limit, offset)=>{
        return new Promise((resolve , reject) =>{
            db.query(`SELECT * FROM users 
            WHERE display_name LIKE "%${search}%" 
            ORDER BY ${field} ${typeSort}
            LIMIT ${limit} OFFSET ${offset}`, (err, result) =>{
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }

            })
        })
    },
    getdetail: (id)=>{
        return new Promise((resolve , reject) =>{
            db.query(`select * from users where id=${id}`, (err, result) =>{
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }

            })
        })
    },
    insert: (id,display_name, first_name, last_name, birth_day, gender, email_address, delivery_address, number_phone)=>{
        
        return new Promise((resolve , reject) =>{
            db.query(`insert into users (id,display_name, first_name, last_name, birth_day, gender, email_address, delivery_address, number_phone) value ("${id}","${display_name}","${first_name}","${last_name}","${birth_day}","${gender}", "${email_address}","${delivery_address}","${number_phone}")`,(err,result)=>{
            
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }

            })
        })
    },
    destroy: (id)=>{
        console.log(id)
        return new Promise((resolve , reject) =>{
            db.query(`delete from users where id="${id}"`, (err, result)=>{
            
                if(err){
                    
                    reject(err)
                }else{
                    console.log(result)
                    resolve(result)
                }

            })
        })
    },
    update: (id,display_name, first_name, last_name, birth_day, gender, email_address, delivery_address, number_phone)=>{
        return new Promise((resolve , reject) =>{
            db.query(`update users set display_name="${display_name}", first_name="${first_name}", last_name="${last_name}", birth_day="${birth_day}", gender="${gender}", email_address="${email_address}", delivery_address="${delivery_address}", number_phone="${number_phone}" where id="${id}"` ,(err,result)=>{
                
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }

            })
        })
    },
}
module.exports = usermodel