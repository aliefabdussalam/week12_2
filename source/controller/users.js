const usermodel = require('../model/users.model')
const {success, failed} = require('../helper/respon')

const user = {


    getlist:(req, res) =>{
        try {
            const query = req.query
            const search = query.search === undefined ? "" : query.search
            const field = query.field === undefined ? "id" : query.field
            const typeSort = query.sort === undefined ? "ASC" : query.sort
            const limit = query.limit === undefined ? 5 : query.limit
            const offset = query.page === undefined || query.page == 1 ? 0 : (query.page-1)*limit
           usermodel.getlist(search, field, typeSort, limit, offset).then(async(result)=>{
            const alldata = await usermodel.getAllData()
            const response = {
                data : result,
                totalpage : Math.ceil(alldata.length/limit),
                limit: limit,
                page : req.query.page
            }
            //    res.json(result)
            success(res, response, "success")
           }).catch((err)=>{
            res.json(err)
           })
        } catch (error) {
            // res.json(error)
            failed(res, 404)
        }
    },
    getdetail:(req, res)=>{
        const id = req.params.id
        try {
            usermodel.getdetail(id).then((result)=>{
                res.json(result)
            }).catch((err)=>{
             res.json(err)
            })
         } catch (error) {
             res.json(error)
         }
    },
    insert:(req, res)=>{
        try {
            const body = req.body
            const id = body.id
            const display_name = body.display_name
            const first_name = body.first_name
            const last_name = body.last_name
            const birth_day = body.birth_day
            const gender = body.gender
            const email_address = body.email_address
            const delivery_address = body.delivery_address
            const number_phone = body.number_phone 
            usermodel.insert(id,display_name, first_name, last_name, birth_day, gender, email_address, delivery_address, number_phone).then((result)=>{
                res.json(result)
            }).catch((err)=>{
                res.json(err)
            })
        } catch (err) {
            console.log(err)
        }  
    },
    destroy:(req, res)=>{
        try {
            const id = req.params.id
            usermodel.destroy(id).then((result)=>{
                res.json(result)
            }).catch((err)=>{
                res.json(err)
            })
        } catch (err) {
            console.log(err)
        }
    },
    update:(req, res)=>{
        try {
            const body = req.body
            const id = req.params.id
            const display_name = body.display_name
            const first_name = body.first_name
            const last_name = body.last_name
            const birth_day = body.birth_day
            const gender = body.gender
            const email_address = body.email_address
            const delivery_address = body.delivery_address
            const number_phone = body.number_phone 
            usermodel.update(id,display_name, first_name, last_name, birth_day, gender, email_address, delivery_address, number_phone).then((result)=>{
                res.json(result)
            }).catch((err)=>{
                res.json(err)
            })
        } catch (err) {
            console.log(err)
        }
    }
}
module.exports = user