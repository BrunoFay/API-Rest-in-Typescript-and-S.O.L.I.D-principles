import { RequestHandler } from 'express';
import Joi from 'joi';

class LoginValidate {
  protected LoginSchema = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(8).required(),
  });

  public validate: RequestHandler = async (req, res, next) => {
    const { error } = this.LoginSchema.validate(req.body);
    const errorMessage = error?.message;
    if (errorMessage?.endsWith('required')) {
      return res.status(400).json({ message: error?.message });
    }
    next();
  };
}
export default LoginValidate;