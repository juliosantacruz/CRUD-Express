import Joi from 'joi'


const id = Joi.alternatives().try(Joi.string(), Joi.number())
const name = Joi.string().min(3)

export const createCategorySchema = Joi.object({
  // id:id.required(),
  name:name.required(),
})

export const updateCategorySchema = Joi.object({
  id:id,
  name:name,
})

export const getCategorySchema = Joi.object({
  id:id.required(),
})
