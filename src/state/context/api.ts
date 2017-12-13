import { httpMethods } from './../../utils/networkLayer/httpMethods';
import { basePaths } from './../../constants/urls';
import { basicHeaders } from './../../utils/networkLayer/httpHeaders';
import { ApiDefinition } from './../types';

export const requestLoginDefinition = (userName: string, userPass: string): ApiDefinition => {
  let stage = process.env.NODE_ENV || 'development';
  return {
    method: httpMethods.POST,
    headers: basicHeaders,
    path: '5a3147e92e0000ce1de3b459',
    basePath: basePaths.users[stage],
    body: {
      email: userName,
      password: userPass
    }
  };
};