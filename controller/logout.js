async function logout(req,res) {
    try{
        req.session = null;
        userName = null;
        isLoggedIn = false;
        res.redirect('/');
    }
    catch(error){
        console.error(error);
    }
}



module.exports = {logout};


