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
    
    let user, password
    // console.log('log in ...')
    // console.log(req.body)
    try {
        user = await db.any("select * from members where email=${email} ", req.body)
        if (user.length > 0) {
            let _user = user[0]
           
            password = _user.password
            if (password == req.body.password) {
                req.session.failed_login = 0
                req.session.user = _user
                console.log(`authenticated user ${_user.id} ${_user.email}`)
                res.status(200).json({
                    code: 1000,
                    user: _user,
                    message: "Authenticated ",
                });
            } else {
                if (!req.session.failed_login) {
                    req.session.failed_login = 1
                } else {
                    req.session.failed_login++
                }
                console.log(`Incorrect password for user ${_user.email}`)
                setTimeout(
                    () => res.status(200).json({
                        code: 1002,
                        failed: req.session.failed_login,
                        message: "Incorrect password",
                    }), req.session.failed_login * 1500);
            }
        } else {
            if (!req.session.failed_login) {
                req.session.failed_login = 1
            } else {
                req.session.failed_login++
            }
            setTimeout(() =>
                res.status(200).json({
                    code: 1003,
                    failed: req.session.failed_login,
                    message: "Incorrect user name",
                }), req.session.failed_login * 2000);
        }
    } catch (e) {
        console.log(e.message)
        res.status(200).json({
            code: 999,
            error: e.message
        })
    }



       
}
