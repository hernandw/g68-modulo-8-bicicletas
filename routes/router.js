import express from 'express';
import { home, bicicletas } from '../controllers/controller.js';
const router = express.Router()

router.get('/', home)

router.get('/bicicletas', bicicletas)

router.get('*', (req, res)=>{
res.send('404 - page not found')
})


export default router