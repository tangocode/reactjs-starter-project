import { httpMethods } from './httpMethods';
import { basePaths } from './../constants';
import * as _ from 'lodash';

const basicHeaders = {
  'Content-Type': 'application/json',
};

const basicSecureHeaders = {
  'Content-Type': 'application/json',
  'Authorization': '',
  'Organization': ''
};

export interface ApiDefinition {
  method: string;
  headers: Object;
  path: string;
  basePath: string;
  body?: Object;
}

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