const response = {
    
    success : (res, data, message) =>{
        const response = {
            success : true,
            data: data,
            code : 200,
            message: message,            
        }
        res.json(response)
    },
    failed : (res, code) =>{
       const failed = {
            success : false,
            data: null,
            code : 404,
            message: "data not found"
        }
        res.json(failed)
    }
}

module.exports = response