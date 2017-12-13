import { ApiDefinition } from './networkApiDefinition';

export default (apiDefinition) => {
  const headers = new Headers();
  for (const header of Object.keys(apiDefinition.headers)) {
    headers.append(header, apiDefinition.headers[header]);
  }
  const request = {
    method: apiDefinition.method,
    headers: headers,
    body: apiDefinition.body,
  };  
  const url =  `${apiDefinition.basePath}${encodeURI(apiDefinition.path)}`;
  return fetch(url, request)
  .then(function(response: any) {
    return response.json();
  });
};