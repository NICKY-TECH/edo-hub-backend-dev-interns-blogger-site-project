const path=require('path');

const {User}=require(path.join(__dirname,'..','Model','user.model'));

async function userDashboard(req,res){
    const loggedIn=req.session.userId;
    User.findOne({_id:loggedIn},{password:0},function(error,userDetails){
        if(error){
            res.status(500).json({
                success:false,
                error:[],
                message:"An error occurred while processing your request, please try again"
            })
        }else{
            console.log(userDetails)
            res.render('User_dashboard',{userDetails})

        }
    })

}

async function updateUserInfo(req,res){

}

module.exports={
    userDashboard,
    updateUserInfo
}