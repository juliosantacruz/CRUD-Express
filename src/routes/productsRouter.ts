import { ProductsService } from "../services/productsServices";
import { validatorHandler } from "../middleware/validatorHandler";
import {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} from "../schemas/productsSchemas";
import express from "express";

const router = express.Router();
const services = new ProductsService();

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
  validatorHandler(getProductSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await services.findOne(id);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  "/",
  validatorHandler(createProductSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newproduct = await services.create(body);
      res.status(201).json({
        message: "product created",
        data: newproduct,
      });
    } catch (error) {
      next(error);
    }
  },
);

router.patch(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  validatorHandler(updateProductSchema, "body"),

  async (req: express.Request, res: express.Response, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await services.update(id, body);
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
  validatorHandler(getProductSchema, "params"),
  async (req: express.Request, res: express.Response, next) => {
    try {
      const { id } = req.params;
      const productId = await services.delete(id);
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
