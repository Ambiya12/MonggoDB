import {Router} from 'express';
import { getAllUsers, createUser, getUserbyID, userUpdate, deleteUser} from '../controller/userController.js';
import { VerifyUserFields } from '../middlewares/verifyUserCreation.js';

const usersRouter = Router();

usersRouter.get('/users', getAllUsers ) 

usersRouter.get('/users/:id', getUserbyID )

usersRouter.post('/users', VerifyUserFields, createUser )

usersRouter.put('/users/:id', userUpdate )

usersRouter.delete('/users/:id', deleteUser )

export default usersRouter;