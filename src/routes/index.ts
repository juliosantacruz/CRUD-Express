import express from 'express'
import productsRouter from './productsRouter'
import categoryRouter from './categoryRouter'

const routerApi = (app: express.Express)=>{
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/products', productsRouter)
  router.use('/category', categoryRouter)
}



export default routerApi
