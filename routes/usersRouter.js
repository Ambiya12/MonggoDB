import {Router} from 'express';
import User from '../models/users.js';

const usersRouter = Router();

usersRouter.get('/users',async (req, res) => {
    try{
        const users = await User.find();
        if(!users.length < 1){
            return res.status(400).json({message: 'No users found'});
        }
        return res.status(200).json(users);
    }
    catch(err){
        return res.status(500).json({message: 'Internal server error'});
    }
});

export default usersRouter;