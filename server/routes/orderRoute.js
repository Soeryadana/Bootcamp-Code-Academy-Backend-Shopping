import { Router } from 'express';
import indexCrtl from '../controller/indexCrtl';
import login from '../auth/login';

const router = Router();

// router.get('/',indexCrtl.productCtrl.findAll);
// router.get('/category/:id',indexCrtl.productCtrl.productsByCategory);
router.post('/', login.checkToken, indexCrtl.orderCtrl.create, indexCrtl.orderDetailCtrl.create);
// router.post('/', indexCrtl.orderCtrl.create, indexCrtl.orderDetailCtrl.create);


export default router;