import { jwtDecode } from "jwt-decode";
export class Utils {

  static decodeJWT(token: string) {
      const decoded = jwtDecode(token);
    }  
}