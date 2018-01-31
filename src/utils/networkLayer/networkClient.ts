// import { ApiDefinition } from './networkApiDefinition';
import { httpMethods } from  './httpMethods';

interface RequestType {
  method: string;
  headers: Headers;
  body?: string;
}

export default (apiDefinition) => {
  const headers = new Headers();
  for (const header of Object.keys(apiDefinition.headers)) {
    headers.append(header, apiDefinition.headers[header]);
  }
  const request: RequestType = {
    method: apiDefinition.method,
    headers: headers,
  };
  if (apiDefinition.body && apiDefinition.method !== httpMethods.GET && apiDefinition.method !== httpMethods.DELETE) {
    request.body = JSON.stringify(apiDefinition.body);
  }

  const url =  `${apiDefinition.basePath}${encodeURI(apiDefinition.path)}`;
  return fetch(url, request)
  .then(function(response: any) {
    return response.json();
  });
};