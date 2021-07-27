const productmodel = require('../model/product.model')
const {success, failed} = require('../helper/respon')

const product = {


    getlist:(req, res) =>{
        try {
            const query = req.query
            const search = query.search === undefined ? "" : query.search
            const field = query.field === undefined ? "id" : query.field
            const typeSort = query.sort === undefined ? "ASC" : query.sort
            const limit = query.limit === undefined ? 5 : query.limit
            const offset = query.page === undefined || query.page == 1 ? 0 : (query.page-1)*limit
           productmodel.getlist(search, field, typeSort, limit, offset).then(async(result)=>{
            const alldata = await productmodel.getAllData()
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
            productmodel.getdetail(id).then((result)=>{
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
            const idproduct = body.id
            const product= body.product
            const price = body.price
            const description = body.description
            const category = body.category
            const stock = body.stock
            productmodel.insert(idproduct,product, price, description, category, stock).then((result)=>{
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
            productmodel.destroy(id).then((result)=>{
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
            const idproduct = req.params.id
            const product= body.product
            const price = body.price
            const description = body.description
            const category = body.category
            const stock = body.stock
            productmodel.update(idproduct,product, price, description, category, stock).then((result)=>{
                res.json(result)
                console.log(result)
            }).catch((err)=>{
                res.json(err)
            })
        } catch (err) {
            console.log(err)
        }
    }
}
module.exports = product