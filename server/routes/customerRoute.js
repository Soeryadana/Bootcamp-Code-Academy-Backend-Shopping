import { Router } from 'express';
import indexCrtl from '../controller/indexCrtl';
import login from '../auth/login';

const router = Router();

router.get('/',login.checkToken,indexCrtl.customerCtrl.findAll);
router.get('/accounts/',login.checkToken,indexCrtl.customerCtrl.customerWithUsers);
router.get('/order-details/',login.checkToken,indexCrtl.customerCtrl.customerWithOrderDetail);

export default router;