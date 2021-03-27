'use strict'





module.exports = {
    echo,
    login
}

async function echo(req, res, next) {
    
    res.status(200).json({
        code: 1000,
        
        message: "hello world",
    })
       
}
async function login(req, res, next) {
    
    res.status(200).json({
        code: 1000,
        
        message: "success",
    })
       
}
