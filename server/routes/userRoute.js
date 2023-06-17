import { Router } from 'express';
import indexCrtl from '../controller/indexCrtl';
import auth from '../auth/login';

const router = Router();

// router.get('/',indexCrtl.productCtrl.findAll);
router.post('/signup',indexCrtl.userCtrl.createUser,indexCrtl.customerCtrl.create);
router.post('/signin',auth.userLogin);

export default router;