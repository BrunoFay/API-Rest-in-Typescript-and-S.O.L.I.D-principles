import { RequestHandler } from 'express';
import Joi from 'joi';

class OrderValidate {
  protected orderSchema = Joi.object({
    productsIds: Joi.array().required(),
    user: Joi.any(),
  });

  public validate: RequestHandler = async (req, res, next) => {
    const { productsIds } = req.body;

    const { error } = this.orderSchema.validate(req.body);

    if (error?.message === '"productsIds" is required') {
      return res.status(400).json({ message: error.message });
    }
    if (productsIds.length < 1) {
      return res.status(422).json({ message: '"productsIds" must include only numbers' });
    }
    if (error) return res.status(422).json({ message: error?.message });

    next();
  };
}
export default OrderValidate;