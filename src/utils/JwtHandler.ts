import jwtDecode, { JwtPayload } from "jwt-decode";

export function JwtVerification(access_token: string) {
  try {
    if (!Boolean(access_token.trim())) {
      return false;
    }
    if (access_token?.length < 200) {
      return false;
    }
    const decoded: any = jwtDecode(access_token);
    const currentTime = Date.now() / 1000;
    
    if (decoded.exp < currentTime) {
      // console.warn('access token expired');
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
}
