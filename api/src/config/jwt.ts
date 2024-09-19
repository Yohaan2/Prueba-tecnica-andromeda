import jwt from "jsonwebtoken";
import { ENV } from "./envs";
import { resolve } from "path";

const JWT_SECRET = ENV.JWT_SECRET

export class JwtAdapter {
  static generateToken(payload: {email:string}) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h'})
  }

  static verifyToken<T>(token: string): Promise<T | null> {
    return new Promise( (resolve) => {
      jwt.verify( token, JWT_SECRET, (err, decoded) => {
        if ( err ) return resolve(null);
        resolve(decoded as T);
      });
    })
  }
}