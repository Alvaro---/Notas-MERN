const { Router } = require('express');
const routerUser = Router();

const {createUser, getUsers, updateUser, deleteUser, getOneUser}=require ('../controllers/controllerUser')

routerUser.route('/')
    .get(getUsers)
    .post(createUser)
 // .post()

 routerUser.route('/:id')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser)



module.exports = routerUser;