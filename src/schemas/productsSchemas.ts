import Joi from 'joi'


const id = Joi.alternatives().try(Joi.string(), Joi.number())
const name = Joi.string().min(3)
const price = Joi.number().min(10)
const stars =  Joi.number().integer().min(0).max(5)
const categoryId = Joi.number().integer()

export const createProductSchema = Joi.object({
  name:name.required(),
  price:price.required(),
  stars:stars.required(),
  categoryId:categoryId.required(),

})

export const updateProductSchema = Joi.object({
  id:id,
  name:name,
  price:price,
  stars:stars,
  categoryId:categoryId
})

export const getProductSchema = Joi.object({
  id:id.required(),
})
