const User = require('../models/User');

const userCtrl = {}

userCtrl.getUsers = async (req, res) => {
    const user=await User.find();
    res.json(user)
    //res.json({ message: 'get usuarios' })
};

userCtrl.createUser = async (req, res) => {
    const {userName} =req.body;
    const newUser=new User({
        userName:userName
    });
    await newUser.save();
    res.json({ message: 'Usuario agregado'});
};

userCtrl.updateUser = async (req, res) => {
    const {userName}=req.body;
    await User.findOneAndUpdate({_id:req.params.id},{
        userName:userName
    });
    res.json({ message: 'Usuario Actualizado' })
};

userCtrl.deleteUser = async (req, res) => {
    await User.findOneAndDelete({_id: req.params.id});
    res.json({ message: 'Nota Eliminada' })
};

userCtrl.getOneUser = async(req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};


module.exports=userCtrl;