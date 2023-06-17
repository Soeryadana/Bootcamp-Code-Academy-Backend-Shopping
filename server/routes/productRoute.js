import { Router } from 'express';
import indexCrtl from '../controller/indexCrtl';
import login from '../auth/login';
import middleware from '../middleware/upload';

const router = Router();

router.get('/',login.checkToken,indexCrtl.productCtrl.findAll);
router.get('/category/:id',login.checkToken, indexCrtl.productCtrl.productsByCategory);
router.post('/',login.checkToken, middleware.upload, indexCrtl.productCtrl.create);

export default router;