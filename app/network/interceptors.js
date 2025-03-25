export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

export const requestHandler = (request) => {
  if (isHandlerEnabled(request)) {
    // handle request Logic
  }
  return request;
};

export const successHandler = (response) => {

  if (isHandlerEnabled(response)) {
    // handle Response Logic
  }
  return response;
};

export const errorHandler = (error) => {
  // handle error Logic
};
