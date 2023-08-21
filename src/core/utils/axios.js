import axios from "axios";

const client = axios.create({ baseURL: import.meta.env.VITE_BASE_URL });

export const request = async (options) => {
  client.defaults.headers.common.Accept = `application/json ,ar`;
  const onSuccess = (response) => response;
  const onError = (error) => {
    throw error;
  };

  try {
    const response = await client(options);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
}


export const cancelRequest = (cancelTokenSource, message) => {
  cancelTokenSource.cancel(message);
};