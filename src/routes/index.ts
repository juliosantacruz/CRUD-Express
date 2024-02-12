import express from 'express'
import productsRouter from './productsRouter'

const routerApi = (app: express.Express)=>{
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/products', productsRouter)
}



export default routerApi
