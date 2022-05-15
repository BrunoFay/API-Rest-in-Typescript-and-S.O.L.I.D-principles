import { RequestHandler } from 'express';
import jwt, { Jwt, JwtPayload } from 'jsonwebtoken'


class JwtValidate {
  private segredo: string
  constructor() {
    this.segredo = 'batatinha123';

  }
  public validate: RequestHandler = async (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
      return res.status(401).json({ "message": "Token not found" });
    }
    try {

      const decoded = jwt.verify(token, this.segredo);

      if (!decoded) {
        return res
          .status(401)
          .json({ "message": "Invalid token" });
      }

      req.body = { ...req.body, decoded }

      next();
    } catch (err) {
      next(err);
    }
  }

};
export default JwtValidate