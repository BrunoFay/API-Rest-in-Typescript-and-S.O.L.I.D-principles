import { RequestHandler } from 'express';
import Joi from 'joi';

class ProductValidate {
  protected productSchema = Joi.object({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
  });

  public validate: RequestHandler = async (req, res, next) => {
    const { error } = this.productSchema.validate(req.body);
    console.log(error?.message);

    if (error?.message === '"name" is required' || error?.message === '"amount" is required') {
      return res.status(400).json({ message: error.message });
    }

    if (error) return res.status(422).json({ message: error?.message });

    next();
  };
}
export default ProductValidate;