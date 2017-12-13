import { ApiDefinition } from './networkApiDefinition';
import axios from 'axios';

const generateConfig = (apiDefinition: ApiDefinition) => {
  const configObj = {
    method: '',
    url: '',
    data: {},
    headers: {},
    json: true,
  };

  configObj.method = apiDefinition.method;
  configObj.url =  `${apiDefinition.basePath}${encodeURI(apiDefinition.path)}`;
  if (apiDefinition.body) {
    configObj.data = apiDefinition.body;
  }
  configObj.headers = apiDefinition.headers;
  return configObj;
};

export default (apiDefinition) => {
  return axios(generateConfig(apiDefinition));
};