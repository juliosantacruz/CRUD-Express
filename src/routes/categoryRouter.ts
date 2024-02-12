import { CategoryService } from "../services/categoryServices";
import { validatorHandler } from "../middleware/validatorHandler";
import {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema,
} from "../schemas/categorySchemas";
import express from "express";




const router = express.Router();
const services = new CategoryService();


router.get("/", async (req, res, next) => {
  try {
    const products = await services.find();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/:id",
  validatorHandler(getCategorySchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await services.findOne(id as unknown as number);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  "/",
  validatorHandler(createCategorySchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await services.create(body);
      res.status(201).json({
        message: "category created",
        data: newCategory,
      });
    } catch (error) {
      next(error);
    }
  },
);

router.patch(
  "/:id",
  validatorHandler(getCategorySchema, "params"),
  validatorHandler(updateCategorySchema, "body"),

  async (req: express.Request, res: express.Response, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await services.update(id as unknown as number, body);
      res.json({
        message: "product updated id:" + id,
        product
      });
    } catch (error) {
      next(error);
    }
  },
);

router.delete(
  "/:id",
  validatorHandler(getCategorySchema, "params"),
  async (req: express.Request, res: express.Response, next) => {
    try {
      const { id } = req.params;
      const productId = await services.delete(id as unknown as number);
      res.json({
        message: "product deleted" + id,
        data: productId,
      });
    } catch (error) {
      next(error);
    }
  },
);

export default router;
