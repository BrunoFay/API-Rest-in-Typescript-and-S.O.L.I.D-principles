import { RequestHandler } from 'express';
import Joi from 'joi';

class UserValidate {
  protected UserSchema = Joi.object({
    username: Joi.string().min(3).required(),
    classe: Joi.string().min(3).required(),
    level: Joi.number().min(1).required(),
    password: Joi.string().min(8).required(),
  });

  public validate: RequestHandler = async (req, res, next) => {
    const { error } = this.UserSchema.validate(req.body);
    const errorMessage = error?.message;
    if (errorMessage?.endsWith('required')) {
      return res.status(400).json({ message: error?.message });
    }

    if (error) return res.status(422).json({ message: error?.message });

    next();
  };
}
export default UserValidate;