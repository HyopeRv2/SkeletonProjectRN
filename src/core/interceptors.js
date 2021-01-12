import http from './base.api';
import {Toast} from 'native-base';

const interceptors = http._getHttpClient().interceptors.response;

interceptors.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const errorObj = {
      status: error.response.status,
      statusText: error.response.statusText,
      message: error.message,
      data: error.response.data,
    };

    Toast.show({
      message: error.message,
    });

    return Promise.reject(errorObj);
  },
);

export default interceptors;
