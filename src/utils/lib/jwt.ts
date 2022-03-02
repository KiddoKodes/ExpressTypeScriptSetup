import jwt, { Secret } from "jsonwebtoken";
import { JWT_KEY } from "../../config/jwt";
interface Param {
  token: string;
}
const verifyToken = ({ token }: Param) => {
  const decodedToken = jwt.verify(token, JWT_KEY as Secret);
  return decodedToken;
};

export { verifyToken };
